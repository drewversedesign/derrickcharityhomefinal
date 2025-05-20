
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Derrick Charity Home
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're dedicated to caring for, educating, and empowering orphans and needy children in Uganda.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At Derrick Charity Home, our mission is to care for, educate, and empower orphans and 
                    needy children by providing basic needs and a stable environment for growth.
                  </p>
                  <p className="text-gray-600">
                    We believe that every child deserves access to food, education, healthcare, 
                    and a loving home, regardless of their background.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Compassion:</strong> Acting with empathy and understanding in all endeavors.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Integrity:</strong> Maintaining the highest ethical standards and transparency.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Sustainability:</strong> Focusing on long-term solutions, not just immediate relief.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> Working with communities to develop effective solutions.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Derrick Charity Home was founded in 2021 by Nimwesiga Derrick, who holds a Diploma in Social Work & Social 
                    Administration from Bishop Stuart University. After witnessing the challenges faced by orphaned and vulnerable 
                    children in his community, Derrick was inspired to create a safe haven where these children could thrive.
                  </p>
                  <p className="text-gray-600 mb-4">
                    What started as a small initiative to provide basic needs to a handful of children has grown into a 
                    comprehensive program that now supports over 40 children with food, education, healthcare, and emotional support.
                  </p>
                  <p className="text-gray-600">
                    Today, Derrick Charity Home continues to expand its reach and impact, working closely with the local 
                    community to identify and address the needs of vulnerable children in Uganda.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
                <p className="text-gray-600 mb-8">
                  Since our founding in 2021, we have made significant strides in improving the lives of orphaned and 
                  vulnerable children in Uganda through our various programs and initiatives.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-yellow-600 mb-2">40+</h3>
                    <p className="text-gray-700 font-medium">Children Supported</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-yellow-600 mb-2">7+</h3>
                    <p className="text-gray-700 font-medium">Active Programs</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
                    <h3 className="text-3xl font-bold text-yellow-600 mb-2">4</h3>
                    <p className="text-gray-700 font-medium">Years of Service</p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Each day, we strive to create meaningful change in the lives of the children we serve, 
                  focusing not only on meeting their immediate needs but also on empowering them to build 
                  a brighter future for themselves and their communities.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Led by our founder, Nimwesiga Derrick, our dedicated team works tirelessly to create a nurturing environment for the children in our care.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png" 
                            alt="Nimwesiga Derrick" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <h3 className="font-bold text-lg">Nimwesiga Derrick</h3>
                        <p className="text-gray-500 text-sm mb-2">Founder & Director</p>
                        <p className="text-gray-600 text-sm">
                          Holds a Diploma in Social Work & Social Administration from Bishop Stuart University, dedicated to improving children's lives.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png" 
                            alt="Mary Nakimuli" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <h3 className="font-bold text-lg">Mary Nakimuli</h3>
                        <p className="text-gray-500 text-sm mb-2">Education Coordinator</p>
                        <p className="text-gray-600 text-sm">
                          Former teacher with 10+ years of experience, manages our education support programs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-50 border border-gray-100 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                          <img 
                            src="/lovable-uploads/5ca619e6-2139-4879-9b3c-94777ab85e2a.png" 
                            alt="John Mukasa" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <h3 className="font-bold text-lg">John Mukasa</h3>
                        <p className="text-gray-500 text-sm mb-2">Healthcare Manager</p>
                        <p className="text-gray-600 text-sm">
                          Registered nurse overseeing health initiatives and preventive care programs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/donate" className="inline-flex items-center px-5 py-3 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 transition-all group">
                Support Our Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
