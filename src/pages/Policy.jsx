import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Policy = () => {
    const [searchParams] = useSearchParams();
    const tabParam = searchParams.get('tab');
    
    const tabs = [
        { id: 'terms', label: 'Terms of Use', content: <TermsContent /> },
        { id: 'privacy', label: 'Privacy Policy', content: <PrivacyContent /> },
        { id: 'disclaimer', label: 'Disclaimer', content: <DisclaimerContent /> },
        { id: 'accessibility', label: 'Web Accessibility', content: <AccessibilityContent /> },
        { id: 'cookies', label: 'Cookies Policy', content: <CookiesContent /> },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    useEffect(() => {
        if (tabParam) {
            const found = tabs.find(t => t.id === tabParam);
            if (found) setActiveTab(found.id);
        }
    }, [tabParam]);

    return (
        <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold text-primary mb-12 border-b pb-6">Legal & Policies</h1>
            
            <div className="flex flex-col md:flex-row gap-12">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <nav className="flex flex-col space-y-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-left px-4 py-3 rounded-md font-medium transition-colors ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-white'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-grow bg-white p-8 border border-gray-100 shadow-sm min-h-[500px]">
                    {tabs.find(t => t.id === activeTab)?.content}
                </div>
            </div>
        </div>
    );
};

// Placeholder components for policy content
const TermsContent = () => (
    <div className="prose max-w-none">
        <h3>Web Terms of Use</h3>
        <p>Welcome to BW Supply Chain. By accessing our website, you agree to these terms.</p>
        <p className="text-gray-500 italic">[Content to be provided]</p>
    </div>
);

const PrivacyContent = () => (
    <div className="prose max-w-none">
        <h3>Privacy Policy</h3>
        <p>Your privacy is important to us. We are committed to protecting your personal information.</p>
        <p className="text-gray-500 italic">[Content to be provided]</p>
    </div>
);

const DisclaimerContent = () => (
    <div className="prose max-w-none">
        <h3>Disclaimer</h3>
        <p>The information provided on this website is for general informational purposes only.</p>
        <p className="text-gray-500 italic">[Content to be provided]</p>
    </div>
);

const AccessibilityContent = () => (
    <div className="prose max-w-none">
        <h3>Web Accessibility</h3>
        <p>We strive to make our website accessible to all users, including those with disabilities.</p>
        <p className="text-gray-500 italic">[Content to be provided]</p>
    </div>
);

const CookiesContent = () => (
    <div className="prose max-w-none">
        <h3>Cookies Policy</h3>
        <p>We use cookies to enhance your browsing experience and analyze site traffic.</p>
        <p className="text-gray-500 italic">[Content to be provided]</p>
    </div>
);

export default Policy;
