
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="Privacy Policy | Derrick Charity Home" 
        description="Our privacy policy outlines how we collect, use, and protect your information when you interact with Derrick Charity Home."
        keywords={['privacy policy', 'data protection', 'charity privacy', 'donor privacy', 'GDPR compliance']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: May 20, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                At Derrick Charity Home ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Make a donation</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through our website</li>
                <li>Register for our events</li>
                <li>Apply to volunteer or work with us</li>
              </ul>
              <p className="text-gray-600 mb-4">
                This information may include your name, email address, phone number, mailing address, donation details, and any other information you choose to provide.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Process and acknowledge donations</li>
                <li>Send receipts and thank you messages</li>
                <li>Provide updates about our work and impact</li>
                <li>Respond to your inquiries</li>
                <li>Send newsletters and other communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and protect our organization</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Donor Privacy</h2>
              <p className="text-gray-600 mb-4">
                We respect the privacy of our donors and take appropriate measures to protect their personal information. We will not sell, trade, or share your personal information with anyone else, nor send donor mailings on behalf of other organizations, unless a donor has given us specific permission to do so.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                While our work focuses on helping children, our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete such information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                We may use third-party services (such as payment processors and email marketing platforms) that collect, monitor, and analyze data to help us improve our services and process donations securely. These third parties have their own privacy policies addressing how they use such information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Security</h2>
              <p className="text-gray-600 mb-4">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your personal information, or to opt out of communications.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy, please contact us at info@derrickcharityhome.org</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
