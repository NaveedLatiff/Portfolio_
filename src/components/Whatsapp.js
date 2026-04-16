"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsApp = () => {
    const phoneNumber = "923102331695";

    const message =
        "Hello Naveed, I came across your portfolio and would like to discuss a potential project with you.";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-8 right-8 z-9999 flex items-center group">
            <motion.span 
                initial={{ opacity: 0, x: 20 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="mr-3 px-4 py-2 text-sm font-medium bg-black text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
            >
                Let's have a Chat 
            </motion.span>

          <motion.div
                onClick={handleClick}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                    boxShadow: [
                        "0 0 0 0 rgba(34, 197, 94, 0.7)",
                        "0 0 0 10px rgba(34, 197, 94, 0)",
                        "0 0 0 0 rgba(34, 197, 94, 0)"
                    ]
                }}
                transition={{
                    boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="relative bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-full cursor-pointer shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group"
            >
                <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                
               <FaWhatsapp className="relative text-white text-3xl" />
            </motion.div>
        </div>
    );
};

export default WhatsApp;