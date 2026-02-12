document.addEventListener('DOMContentLoaded', () => {
    // Load Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setActiveNavLink();
        });

    // Load Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

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
    const page = path.split('/').pop();

    let activeId = 'nav-home';
    if (page === 'showcase.html') activeId = 'nav-showcase';

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
