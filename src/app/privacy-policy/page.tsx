import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-gradient-to-b from-[#010b15] via-[#031525] to-[#052642]">
      <div className="container-custom px-4 sm:px-6 md:px-6 py-16 md:py-20">
        <div className="container-custom px-0 sm:px-[1rem] md:px-[1rem] text-white">
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
          
          <p className="mb-4 text-sm">Effective Date: 17/10/2025</p>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">1. Introduction</h2>
            <p className="mb-2 text-sm">
              Welcome to Inthra (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
              This Privacy Policy explains how we collect, use, and protect your personal
              information when you visit our website <a href="https://inthra.io" className="text-blue-400 hover:underline">https://inthra.io</a>.
            </p>
            <p className="mb-4 text-sm">
              We are committed to protecting your privacy and handling your data
              in compliance with the UK General Data Protection Regulation (UK
              GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4 text-sm">
              We collect and process the following personal data:
            </p>
            <p className="mb-2 text-sm">
              Contact Information: First name, last name, and email address (when you submit a form or contact us).
            </p>
            <p className="mb-2 text-sm">
              Usage Data: Information collected automatically through Google Analytics, including:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-2 text-sm">
                IP address (anonymised where possible)
              </li>
              <li className="mb-2 text-sm">
                Browser type and version
              </li>
              <li className="mb-2 text-sm">
                Pages visited and time spent on each page
              </li>
              <li className="mb-2 text-sm">
                Device and operating system information
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4 text-sm">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li className="mb-2 text-sm">
                To respond to inquiries and provide customer support
              </li>
              <li className="mb-2 text-sm">
                To improve our website, services, and user experience
              </li>
              <li className="mb-2 text-sm">
                To analyse website traffic and performance via Google Analytics
              </li>
            </ul>
            <p className="mb-4 text-sm">
              We do not sell, rent, or trade your personal data with any third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[1.25rem] font-bold mb-4">
              4. Legal Basis for Processing
            </h2>
            <p className="mb-4 text-sm">
                We process personal data under the following legal bases:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2 text-sm">
                  Consent: When you voluntarily provide information through our website (e.g., contact forms).
                </li>
                <li className="mb-2 text-sm">
                  Legitimate Interests: To improve our website and analyse how visitors interact with our content.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                5. Data Retention
              </h2>
              <p className="mb-4 text-sm">
                We retain personal data only as long as necessary to fulfil the purposes outlined in this policy or as required by law.
                Analytics data may be retained by Google in accordance with their own data retention policies.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                6. Data Sharing and Third Parties
              </h2>
              <p className="mb-4 text-sm">
                We may share anonymised data with:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2 text-sm">
                  Google Analytics (Google LLC) – for website usage analysis. Google may store and process this information on servers outside the UK.
                </li>
              </ul>
              <p className="mb-4 text-sm">
                We do not share your personal information with any other third parties.
              </p>
              <p className="mb-4 text-sm">
                You can learn more about how Google handles data here:
                <a href="https://policies.google.com/privacy" className="text-blue-400 hover:underline ml-1">https://policies.google.com/privacy</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                7. Cookies
              </h2>
              <p className="mb-4 text-sm">
                Our website uses cookies and similar technologies to analyse site traffic through Google Analytics.
                You can manage or disable cookies through your browser settings.
                For more information, see Google&apos;s cookie policy:
                <a href="https://policies.google.com/technologies/cookies" className="text-blue-400 hover:underline ml-1">https://policies.google.com/technologies/cookies</a>
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                8. Your Rights
              </h2>
              <p className="mb-4 text-sm">
                Under the UK GDPR, you have the following rights:
              </p>
              <ul className="list-disc list-inside ml-4">
                <li className="mb-2 text-sm">
                  Access your personal data
                </li>
                <li className="mb-2 text-sm">
                  Request correction or deletion
                </li>
                <li className="mb-2 text-sm">
                  Restrict or object to processing
                </li>
                <li className="mb-2 text-sm">
                  Withdraw consent (where applicable)
                </li>
                <li className="mb-2 text-sm">
                  Lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="text-blue-400 hover:underline">https://ico.org.uk</a>
                </li>
              </ul>
              <p className="mb-4 text-sm">
                To exercise these rights, please reach out to us via our contact form on <a href="https://inthra.io" className="text-blue-400 hover:underline">https://inthra.io</a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                9. Data Security
              </h2>
              <p className="mb-4 text-sm">
                We implement appropriate technical and organisational measures to safeguard your personal data from unauthorised access, loss, misuse, or disclosure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                10. Changes to This Policy
              </h2>
              <p className="mb-4 text-sm">
                We may update this Privacy Policy from time to time. Any updates will be posted on this page with the revised effective date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-[1.25rem] font-bold mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4 text-sm">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us via the contact form on our website: <a href="https://inthra.io" className="text-blue-400 hover:underline">https://inthra.io</a>
              </p>
            </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
