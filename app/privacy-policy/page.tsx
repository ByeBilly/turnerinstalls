import Section from "@/components/Section";

export const metadata = {
  title: "Privacy Policy | Turner Installs",
  description: "Privacy policy for Turner Installs - how we collect, use and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-400 max-w-2xl">
          Last updated: {new Date().toLocaleDateString("en-AU", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </section>

      <Section>
        <div className="max-w-3xl prose prose-invert">
          <div className="space-y-6 text-xs text-gray-400">
            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Introduction</h2>
              <p>
                Turner Installs ("we", "our", or "us") is committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or contact us for our services.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Property address and details</li>
                <li>Information about your flooring project requirements</li>
                <li>Any other information you choose to provide in communications with us</li>
              </ul>
              <p className="mt-2">
                We may also collect information automatically when you visit our website, such as your IP
                address, browser type, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Respond to your enquiries and provide quotes</li>
                <li>Schedule site visits and installations</li>
                <li>Communicate with you about your project</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Disclosure of Your Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>With service providers who assist us in operating our business (e.g., website hosting)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal
                information. However, no method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. Cookies are small files stored on
                your device that help us understand how you use our website. You can choose to disable
                cookies through your browser settings, though this may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Retention of Information</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-gray-100 mb-2">Contact Us</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div className="mt-2 space-y-1">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:liam@turnerinstalls.com.au" className="text-yellow-400 hover:text-yellow-300">
                    liam@turnerinstalls.com.au
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href={`tel:${process.env.NEXT_PUBLIC_SUPPORT_PHONE?.replace(/\s/g, "")}`} className="text-yellow-400 hover:text-yellow-300">
                    {process.env.NEXT_PUBLIC_SUPPORT_PHONE}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Brisbane, QLD, Australia
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

