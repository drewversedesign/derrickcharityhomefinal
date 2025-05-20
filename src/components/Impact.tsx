
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Users, Book, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const impactStats = [
    {
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      value: "40+",
      label: "Children Supported",
      description: "Direct daily support providing meals, education, and care"
    },
    {
      icon: <Book className="h-8 w-8 text-yellow-600" />,
      value: "7+",
      label: "Active Programs",
      description: "Comprehensive programs addressing various needs"
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-yellow-600" />,
      value: "4",
      label: "Years of Service",
      description: "Continuous community support since 2021"
    }
  ];

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="impact" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Real Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Since our founding in 2021, Derrick Charity Home has been committed to improving the lives of orphaned 
            and needy children in Uganda through sustainable, community-focused programs.
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 rounded-full p-4 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{stat.label}</p>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Our Founder's Mission</h3>
              <p className="text-gray-600 mb-6">
                Nimwesiga Derrick founded Derrick Charity Home with a vision to create a Uganda where every child—regardless of their background—has 
                access to food, education, healthcare, and a loving home.
              </p>
              <p className="text-gray-600 mb-6">
                With a Diploma in Social Work & Social Administration from Bishop Stuart University, Derrick has dedicated his life 
                to improving the welfare of vulnerable children in his community.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Button 
                  onClick={scrollToContact}
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900"
                >
                  Support Our Mission
                </Button>
              </div>
            </div>
            <div className="h-[300px] lg:h-auto overflow-hidden">
              <img 
                src="https://github.com/drewversedesign/Derrick-Charity-Home/blob/main/elite_foundation_uganda-18-05-2025-0002.jpg?raw=true" 
                alt="Derrick Charity Home Founder" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
