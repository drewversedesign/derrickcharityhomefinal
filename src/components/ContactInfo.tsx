import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const ContactInfo = () => {
  const { toast } = useToast();

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="contact-info" className="bg-gradient-to-b from-white to-gray-100 text-gray-800 relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Want to support our mission? Have questions about our programs? Reach out to us and learn how you can make a difference in a child's life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <img alt="Nimwesiga Derrick" className="w-32 h-32 rounded-full mb-4 object-cover" src="https://github.com/drewversedesign/Derrick-Charity-Home/blob/main/IMG-20250518-WA0045.jpg?raw=true" />
              <h3 className="text-xl font-bold text-gray-900">Nimwesiga Derrick</h3>
              <p className="text-gray-600 mb-4">Founder & Director</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:nimwesigaderrick@gmail.com" className="flex items-center text-gray-700 hover:text-yellow-600">
                  <Mail className="w-5 h-5 mr-2" />
                  nimwesigaderrick@gmail.com
                </a>
                <a href="tel:+256709444011" className="flex items-center text-gray-700 hover:text-yellow-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +256 709 444 011
                </a>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2" />
                  Kampala, Uganda
                </div>
              </div>
            </div>
          </div>

          {/* Donation Call to Action */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your support can change a child's life. Every contribution helps us provide food, education, and healthcare to children in need.
              </p>
              <div className="space-y-4 w-full">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Remitly Money Transfer</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-yellow-100 p-2 rounded transition-colors"
                      onClick={() => copyToClipboard('+256709444011', 'Phone number')}
                    >
                      <span><strong>Phone:</strong> +256 709 444 011</span>
                      <Copy className="w-4 h-4 text-gray-500" />
                    </div>
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-yellow-100 p-2 rounded transition-colors"
                      onClick={() => copyToClipboard('NIMWESIGA DERRICK', 'Name')}
                    >
                      <span><strong>Name:</strong> NIMWESIGA DERRICK</span>
                      <Copy className="w-4 h-4 text-gray-500" />
                    </div>
                    <div 
                      className="flex items-center justify-between cursor-pointer hover:bg-yellow-100 p-2 rounded transition-colors"
                      onClick={() => copyToClipboard('Uganda', 'Country')}
                    >
                      <span><strong>Country:</strong> Uganda</span>
                      <Copy className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  We also accept donations via mobile money, bank transfer, and in-kind contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="text-lg font-bold mb-2">Operating Hours</h3>
          <p className="text-gray-700">
            Monday-Friday: 9am-5pm | Saturday: 10am-2pm | Sunday: Closed
          </p>
        </div>
      </div>
    </section>;
};
export default ContactInfo;

// We need to import the Heart icon which wasn't included at the top
import { Heart } from 'lucide-react';