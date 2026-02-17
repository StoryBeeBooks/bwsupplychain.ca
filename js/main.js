// WeChat Detection: Show image instead of video in WeChat browser
function detectAndHandleWeChat() {
    const isWeChat = /micromessenger/i.test(navigator.userAgent);
    
    if (isWeChat) {
        // Hide videos, show images
        const heroVideo = document.querySelector('.hero-video');
        const showcaseVideo = document.querySelector('.showcase-hero-video');
        const heroImage = document.querySelector('.hero-image-fallback');
        const showcaseImage = document.querySelector('.showcase-image-fallback');
        const heroSection = document.querySelector('.hero');
        const showcaseSection = document.querySelector('.showcase-hero');
        
        if (heroVideo) heroVideo.style.display = 'none';
        if (showcaseVideo) showcaseVideo.style.display = 'none';
        if (heroImage) {
            heroImage.style.display = 'block';
            if (heroSection) heroSection.classList.add('using-fallback-image');
        }
        if (showcaseImage) {
            showcaseImage.style.display = 'block';
            if (showcaseSection) showcaseSection.classList.add('using-fallback-image');
        }
    }
}

// Call on page load
detectAndHandleWeChat();

document.addEventListener('DOMContentLoaded', () => {
    // Use absolute paths for shared components so pages in subdirectories
    // can always fetch the header/footer correctly regardless of depth.
    const headerPath = '/components/header.html';
    const footerPath = '/components/footer.html';
    
    // Load Header
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setActiveNavLink();
            initMobileMenu();
        })
        .catch(err => console.error('Failed to load header:', err));

    // Load Footer
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.error('Failed to load footer:', err));

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.querySelector('.faq-question').addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Policy Tabs
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length > 0) {
        const urlParams = new URLSearchParams(window.location.search);
        const activeTabId = urlParams.get('tab') || 'terms';
        activateTab(activeTabId);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');
                activateTab(targetId);
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('tab', targetId);
                window.history.pushState({}, '', newUrl);
            });
        });
    }
});

function setActiveNavLink() {
    const path = window.location.pathname;
    
    let activeId = 'nav-home';
    if (path.includes('/showcase/')) activeId = 'nav-showcase';
    if (path.includes('/faq/')) activeId = 'nav-faq';
    if (path.includes('/policy/')) activeId = 'nav-policy';
    if (path.includes('/product-sourcing')) activeId = 'nav-product';
    if (path.includes('/commodity-sourcing')) activeId = 'nav-commodity';
    if (path.includes('/china-operations')) activeId = 'nav-china';
    if (path.includes('/contact')) activeId = 'nav-contact';

    // Remove active class from all nav links
    document.querySelectorAll('[id^="nav-"]').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the current page's link
    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.classList.add('active');
}

function activateTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
            content.classList.add('active');
        }
    });
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!menuBtn || !navLinks) return;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('mobile-overlay');
    document.body.appendChild(overlay);

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
}
