
import { ArrowLeft, Heart, Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import SEO from '@/components/SEO';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState<string>('25');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<string>('one-time');

  const handleDonationClick = () => {
    // In a real implementation, this would connect to a payment processor
    // For now, we'll just alert
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    alert(`Thank you for your ${donationType} donation of $${amount}! In a real implementation, this would connect to a payment processor.`);
  };

  const impactData = [
    {
      amount: '$25',
      impact: 'Provides nutritious meals for one child for a week'
    },
    {
      amount: '$50',
      impact: 'Covers education materials and school supplies for one child'
    },
    {
      amount: '$100',
      impact: 'Provides comprehensive healthcare for one child for a month'
    },
    {
      amount: '$250',
      impact: 'Supports all needs for one child for an entire month'
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Donate | Derrick Charity Home" 
        description="Support our work providing care, education, and empowerment for orphans and vulnerable children in Uganda."
        keywords={['charity donation', 'support orphans', 'uganda charity', 'donate', 'child sponsorship', 'nonprofit']}
      />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Support Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Today</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your generous donation provides shelter, nutrition, education, healthcare, and hope to vulnerable children in Uganda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Donation Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Make Your Donation</h2>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Select Donation Type</h3>
                <RadioGroup defaultValue="one-time" className="flex gap-4" onValueChange={setDonationType} value={donationType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time" className="cursor-pointer">One-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="cursor-pointer">Monthly</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Select Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['25', '50', '100', '250'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount)}
                      className={`py-3 px-4 rounded-lg border ${
                        donationAmount === amount 
                          ? 'bg-yellow-500 text-white border-yellow-500' 
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      } transition-colors font-medium`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center space-x-2 mb-3">
                  <input 
                    type="radio" 
                    checked={donationAmount === 'custom'} 
                    onChange={() => setDonationAmount('custom')} 
                    className="rounded-full h-4 w-4 text-yellow-500 focus:ring-yellow-500"
                  />
                  <span className="font-semibold">Custom Amount</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    value={customAmount} 
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setDonationAmount('custom');
                    }}
                    className="pl-7 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleDonationClick}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 py-3"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
              
              <div className="mt-4 text-center text-sm text-gray-500 flex items-center justify-center">
                <Info className="h-4 w-4 mr-1" />
                <span>This is a demo form. No actual payment will be processed.</span>
              </div>
            </div>
            
            {/* Impact Information */}
            <div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100 mb-8">
                <h3 className="text-xl font-bold mb-4">Your Impact</h3>
                <ul className="space-y-4">
                  {impactData.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <Check className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">{item.amount}</span>
                        <span className="mx-1">–</span>
                        <span>{item.impact}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                <h3 className="text-xl font-bold mb-4">Other Ways to Help</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Child Sponsorship</span>
                      <p className="text-gray-600 text-sm mt-1">
                        Sponsor a child with a monthly commitment to support their specific needs.
                        <Link to="#" className="block text-yellow-600 hover:underline mt-1">Learn more</Link>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">In-Kind Donations</span>
                      <p className="text-gray-600 text-sm mt-1">
                        Donate clothing, school supplies, medical supplies, or other needed items.
                        <Link to="#" className="block text-yellow-600 hover:underline mt-1">View our wishlist</Link>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Volunteer</span>
                      <p className="text-gray-600 text-sm mt-1">
                        Share your time and skills to help with various projects and initiatives.
                        <Link to="#" className="block text-yellow-600 hover:underline mt-1">Volunteer opportunities</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="https://raw.githubusercontent.com/drewversedesign/Derrick-Charity-Home/refs/heads/main/elite_foundation_uganda-18-05-2025-0031.webp" 
                  alt="Donor testimonial" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="italic text-gray-700 mb-4">
                  "I've been sponsoring a child at Derrick Charity Home for two years now, and it's been one of the 
                  most rewarding experiences. Seeing the difference my monthly donation makes in Sarah's life gives 
                  me immense joy."
                </p>
                <p className="font-semibold">— John D., Monthly Donor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Donate;
