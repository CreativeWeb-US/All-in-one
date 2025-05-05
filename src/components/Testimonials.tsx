import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  type: 'residential' | 'commercial';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Thompson",
    role: "Homeowner",
    content: "All in One provided exceptional service from start to finish. They demolished our old garden shed and removed all the debris in a single day. The crew was professional, efficient, and left our property spotless. I highly recommend their services to any homeowner.",
    rating: 5,
    type: 'residential'
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Property Manager",
    content: "We've worked with All in One on multiple commercial demolition projects, and they consistently deliver outstanding results. Their team's attention to detail, safety protocols, and efficient work have made them our go-to demolition contractor. Their consulting services have saved us time and money.",
    rating: 5,
    type: 'commercial'
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Real Estate Developer",
    content: "The All in One team handled a complex commercial demolition for our new development project. Their expertise was evident from the initial consultation through project completion. They managed all permits, followed all safety regulations, and finished ahead of schedule. An exceptional company to work with.",
    rating: 5,
    type: 'commercial'
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Homeowner",
    content: "We needed a full basement cleanout after years of accumulation. All in One provided a fair estimate and completed the work in just one day. They were respectful of our home and sorted items for donation, recycling, and disposal. A truly professional team!",
    rating: 4,
    type: 'residential'
  },
  {
    id: 5,
    name: "Lisa Chen",
    role: "Restaurant Owner",
    content: "When renovating our restaurant, we hired All in One for interior demolition. They worked during off-hours to minimize business disruption, contained dust and debris expertly, and maintained a safe environment throughout. Their experience in commercial settings really showed.",
    rating: 5,
    type: 'commercial'
  },
  {
    id: 6,
    name: "Robert Patel",
    role: "Homeowner",
    content: "After storm damage to our garage, All in One came quickly to handle the demolition and debris removal. They coordinated directly with our insurance, making the process stress-free. Their team was compassionate, understanding, and extremely efficient. Couldn't ask for better service.",
    rating: 5,
    type: 'residential'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialType, setTestimonialType] = useState<'all' | 'residential' | 'commercial'>('all');
  
  const filteredTestimonials = testimonials.filter(testimonial => {
    if (testimonialType === 'all') return true;
    return testimonial.type === testimonialType;
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-300">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with All in One.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-navy-800 p-1">
            <button
              onClick={() => {
                setTestimonialType('all');
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                testimonialType === 'all' ? 'bg-orange-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              All Testimonials
            </button>
            <button
              onClick={() => {
                setTestimonialType('residential');
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                testimonialType === 'residential' ? 'bg-orange-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => {
                setTestimonialType('commercial');
                setCurrentIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                testimonialType === 'commercial' ? 'bg-orange-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {filteredTestimonials.length > 0 ? (
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -z-10 -top-10 right-20 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative bg-navy-800 rounded-xl p-8 md:p-10 shadow-lg">
              <Quote className="text-orange-500 opacity-30 absolute top-6 left-6" size={48} />
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                  {[...Array(5 - filteredTestimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i + filteredTestimonials[currentIndex].rating} className="text-gray-400" size={20} />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl mb-6">
                  "{filteredTestimonials[currentIndex].content}"
                </p>
                
                <div>
                  <p className="font-bold text-lg">{filteredTestimonials[currentIndex].name}</p>
                  <p className="text-gray-400">{filteredTestimonials[currentIndex].role}</p>
                  <p className="text-orange-500 text-sm mt-1">
                    {filteredTestimonials[currentIndex].type === 'residential' ? 'Residential Client' : 'Commercial Client'}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8 gap-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-navy-700 hover:bg-navy-600 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-navy-700 hover:bg-navy-600 transition-all"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full transition-all ${
                    currentIndex === index ? 'bg-orange-500 w-6' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">No testimonials available for this filter.</p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;