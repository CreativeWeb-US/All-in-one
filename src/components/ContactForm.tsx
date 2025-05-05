import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        projectType: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Request a Free Estimate</h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to start your demolition or junk removal project? Contact us today for a free, no-obligation estimate and consultation. Our team of experts is standing by to assist you.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <ContactInfoCard 
                icon={<Phone className="text-orange-600" size={24} />}
                title="Phone"
                content="(555) 123-4567"
                link="tel:5551234567"
              />
              <ContactInfoCard 
                icon={<Mail className="text-orange-600" size={24} />}
                title="Email"
                content="info@allinonedemo.com"
                link="mailto:info@allinonedemo.com"
              />
              <ContactInfoCard 
                icon={<MapPin className="text-orange-600" size={24} />}
                title="Office"
                content="123 Demolition Way, City, ST 12345"
                link="#"
              />
              <ContactInfoCard 
                icon={<Clock className="text-orange-600" size={24} />}
                title="Hours"
                content="Mon-Fri: 7AM-6PM Sat: 8AM-2PM"
                link="#"
              />
            </div>
            
            <div className="bg-navy-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Why Request an Estimate?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Get an accurate project cost with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Receive expert advice on the best approach for your project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Learn about our eco-friendly disposal methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>No pressure, no obligation consultation</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-2">Thank You!</h3>
                  <p>Your estimate request has been submitted successfully. One of our representatives will contact you shortly.</p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-medium px-5 py-2 rounded-md transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">-- Select Service --</option>
                      <option value="demolition">Demolition</option>
                      <option value="junk-removal">Junk Removal</option>
                      <option value="both">Both Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">-- Select Type --</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Please provide any additional details about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Request Free Estimate
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and consent to be contacted regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string;
}> = ({ icon, title, content, link }) => {
  return (
    <a 
      href={link}
      className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-navy-900">{title}</h4>
        <p className="text-gray-700">{content}</p>
      </div>
    </a>
  );
};

export default ContactForm;