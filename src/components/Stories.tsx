
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Stories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const stories = [
    {
      title: "Education Support Program",
      description: "Our education program has helped over 30 children access quality education through school fees support, learning materials, and tutoring.",
      image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
      link: "#"
    },
    {
      title: "Nutrition & Health Initiative",
      description: "We provide daily nutritious meals and regular health checkups to ensure children grow healthy and strong, supporting their development.",
      image: "/lovable-uploads/6fdd3d0d-5dca-470a-a845-bd7b07bff599.png",
      link: "#"
    },
    {
      title: "Community Engagement",
      description: "Working with local communities, we develop sustainable solutions that empower families and create a supportive environment for children.",
      image: "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      link: "#"
    }
  ];

  return (
    <section id="stories" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our programs are making a real difference in the lives of children and communities in Uganda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{story.description}</p>
                <a 
                  href={story.link} 
                  className="inline-flex items-center text-yellow-600 font-medium hover:text-yellow-700 transition-colors group"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-5 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            View more stories
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stories;
