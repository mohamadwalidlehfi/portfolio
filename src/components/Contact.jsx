import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_11m660g';
    const templateID = 'template_wmvpmro';
    const userID = 'hUGqMCihlzCxx5k3c';

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gray-800 text-white shadow-lg rounded-2xl p-6 md:p-8 lg:p-10">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-500 pb-2 border-b border-gray-700">
          Let's Connect
        </h1>
        <p className="text-gray-300 mt-4 leading-relaxed max-w-2xl">
          Interested in working together or have questions? Fill out the form below and 
          I'll get back to you within 24 hours. Alternatively, you can reach me directly at 
          <span className="text-teal-400"> email@example.com</span>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            rows="5"
            className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-400 transition-all"
            required
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
              isSubmitting 
                ? 'bg-teal-600 cursor-not-allowed'
                : 'bg-teal-500 hover:bg-teal-400 transform hover:-translate-y-1'
            } text-gray-900 shadow-lg`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-800/30 border border-green-600 rounded-lg text-green-300">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-800/30 border border-red-600 rounded-lg text-red-300">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>

      <div className="mt-10 pt-6 border-t border-gray-700">
        <h3 className="text-lg font-medium text-gray-300 mb-4">Other Ways to Reach Me</h3>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+905316581436" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors">
            <PhoneIcon className="w-5 h-5" />
            +90 531 658 14 36
          </a>
          <a href="mailto:mohamadwalidlehfi1@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors">
            <MailIcon className="w-5 h-5" />
            mohamadwalidlehfi1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

// يمكنك استبدال هذه الأيقونات بأيقونات من مكتبة مثل react-icons
function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}