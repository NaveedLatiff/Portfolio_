'use client';
import React, { useRef, useState } from 'react';
import { FaUser, FaEnvelope, FaPen, FaCommentDots, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import img from '../assests/contact-image.png'; 
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    setLoading(true);

    const SERVICE_ID = "service_aa5fvjh"; 
    const TEMPLATE_ID = "template_tzci1gc";
    const PUBLIC_KEY = "pIpR9snUIaUN5yP_O";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        showToast("Message sent successfully!", "success");
        formRef.current.reset();
      })
      .catch((error) => {
        showToast("Network error. Please try again later.", "error");
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen w-full relative z-999 flex flex-col items-center py-5 overflow-hidden">
      
      {notification.show && (
        <div className={`fixed top-5 right-5 z-[1000] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-right-10 ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
          <p className="font-roboto font-medium">{notification.message}</p>
          <button onClick={() => setNotification({ ...notification, show: false })} className="ml-2">
            <FaTimes size={14} />
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-jump {
          animation: jump 2s ease-in-out infinite;
        }
      `}</style>

      <div className='text-center mb-6 md:mb-9 relative z-20'>
        <h2 className='text-green-400 text-lg sm:text-xl font-semibold mb-2 font-roboto tracking-wide uppercase'>Let's Collaborate</h2>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white font-poppins'>Contact Me</h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full h-[500px] max-w-md animate-jump">
              <Image src={img} alt="Contact Illustration" fill className='object-contain' priority />
            </div>
          </div>

          <div className="w-full">
            <form ref={formRef} className="flex flex-col gap-5" onSubmit={sendEmail}>
              
              <div className="relative group w-full">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <input
                  name="user_name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white pl-12 pr-5 py-4 rounded-2xl outline-none focus:border-[#22c55e]/50 transition-all font-roboto"
                />
              </div>

              <div className="relative group w-full">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white pl-12 pr-5 py-4 rounded-2xl outline-none focus:border-[#22c55e]/50 transition-all font-roboto"
                />
              </div>

              <div className="relative group w-full">
                <FaPen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#22c55e] transition-colors text-sm" />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white pl-12 pr-5 py-4 rounded-2xl outline-none focus:border-[#22c55e]/50 transition-all font-roboto"
                />
              </div>

              <div className="relative group w-full">
                <FaCommentDots className="absolute left-4 top-5 text-gray-500 group-focus-within:text-[#22c55e] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] text-white pl-12 pr-5 py-4 rounded-2xl outline-none focus:border-[#22c55e]/50 transition-all font-roboto resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full group py-5 bg-white text-black font-bold cursor-pointer rounded-2xl hover:bg-transparent hover:text-white hover:border-2 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 font-poppins text-lg shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                {!loading && <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact