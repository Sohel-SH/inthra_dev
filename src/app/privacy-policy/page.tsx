import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-gradient-to-b from-[#010b15] via-[#031525] to-[#052642]">
      <div className="container-custom px-6 sm:px-6 py-16 md:py-20">
        <div className="container-custom text-white">
          <div className="text-sm breadcrumbs text-white mb-2">
            <ul className="flex items-center space-x-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="inline-flex items-center">&gt;</li>
              <li className="bg-gradient-to-r from-[#4ade80] via-[#a3ff4e] to-[#cfff81] bg-clip-text text-transparent">
                Privacy Policy
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold text-white mb-8">Privacy Policy</h1>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">1. Introduction</h2>
            <p className="mb-4 text-sm">
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our website [Your Website Name]. Please read this policy
              carefully. If you do not agree with the terms of this privacy
              policy, please do not access the site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-[1.25rem] font-semibold mb-2">Personal Data</h3>
            <p className="mb-4 text-sm">
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to: Email address, First name and last name, Phone
              number, Address, State, Province, ZIP/Postal code, City, Cookies
              and Usage Data.
            </p>
            <h3 className="text-[1.25rem] font-semibold mb-2">Usage Data</h3>
            <p className="mb-4 text-sm">
              We may also collect information how the Service is accessed and
              used (&quot;Usage Data&quot;). This Usage Data may include
              information such as your computer&apos;s Internet Protocol address
              (e.g. IP address), browser type, browser version, the pages of our
              Service that you visit, the time and date of your visit, the time
              spent on those pages, unique device identifiers and other
              diagnostic data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 text-sm">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-2 text-sm">
                Provide, operate, and maintain our website
              </li>
              <li className="mb-2 text-sm">
                Improve, personalize, and expand our website
              </li>
              <li className="mb-2 text-sm">
                Understand and analyze how you use our website
              </li>
              <li className="mb-2 text-sm">
                Develop new products, services, features, and functionality
              </li>
              <li className="mb-2 text-sm">
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li className="mb-2 text-sm">Send you emails</li>
              <li className="mb-2 text-sm">Find and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              4. Disclosure of Your Information
            </h2>
            <p className="mb-4 text-sm">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-2 text-sm">
                <strong>By Law or to Protect Rights:</strong> If we believe the
                release of information about you is necessary to respond to
                legal process, to investigate or remedy potential violations of
                our policies, or to protect the rights, property, and safety of
                others, we may share your information as permitted or required
                by any applicable law, rule, or regulation.
              </li>
              <li className="mb-2 text-sm">
                <strong>Third-Party Service Providers:</strong> We may share
                your information with third parties that perform services for us
                or on our behalf, including data analysis, email delivery,
                hosting services, customer service, and marketing assistance.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              5. Security of Your Information
            </h2>
            <p className="mb-4 text-sm">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">6. Contact Us</h2>
            <p className="mb-4 text-sm">
              If you have questions or comments about this Privacy Policy,
              please contact us at: [Your Contact Email]
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
