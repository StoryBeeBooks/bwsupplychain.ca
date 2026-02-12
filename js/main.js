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

    // Handle FAQ Accordion (only if on FAQ page)
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            item.querySelector('.faq-question').addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all others
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }

    // Handle Policy Tabs (only if on Policy page)
    const tabs = document.querySelectorAll('.tab-btn');
    if (tabs.length > 0) {
        // Check URL parameters for active tab
        const urlParams = new URLSearchParams(window.location.search);
        const activeTabId = urlParams.get('tab') || 'terms';
        
        // Initial Activation
        activateTab(activeTabId);

        // Click Handlers
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetId = tab.getAttribute('data-tab');
                activateTab(targetId);
                
                // Unset query param to avoid confusion or update it (optional)
                const newUrl = new URL(window.location);
                newUrl.searchParams.set('tab', targetId);
                window.history.pushState({}, '', newUrl);
            });
        });
    }
});

function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    let activeId = 'nav-home';
    if (page === 'showcase.html') activeId = 'nav-showcase';
    if (page === 'faq.html') activeId = 'nav-faq';
    if (page === 'policy.html') activeId = 'nav-policy';

    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.classList.add('active');
}

function activateTab(tabId) {
    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    // Content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === tabId) {
            content.classList.add('active');
        }
    });
}
