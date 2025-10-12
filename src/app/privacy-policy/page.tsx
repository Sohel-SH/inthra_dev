import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#010b15] via-[#031525] to-[#052642] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12">Privacy Policy</h1>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website Name]. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
          <h3 className="text-2xl font-semibold mb-2">Personal Data</h3>
          <p className="mb-4">While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies and Usage Data.</p>
          <h3 className="text-2xl font-semibold mb-2">Usage Data</h3>
          <p className="mb-4">We may also collect information how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect in various ways, including to:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2">Provide, operate, and maintain our website</li>
            <li className="mb-2">Improve, personalize, and expand our website</li>
            <li className="mb-2">Understand and analyze how you use our website</li>
            <li className="mb-2">Develop new products, services, features, and functionality</li>
            <li className="mb-2">Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li className="mb-2">Send you emails</li>
            <li className="mb-2">Find and prevent fraud</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">4. Disclosure of Your Information</h2>
          <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul className="list-disc list-inside ml-4">
            <li className="mb-2"><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li className="mb-2"><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">5. Security of Your Information</h2>
          <p className="mb-4">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">6. Contact Us</h2>
          <p className="mb-4">If you have questions or comments about this Privacy Policy, please contact us at: [Your Contact Email]</p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;