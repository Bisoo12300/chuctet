import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, className, ...props }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

export default Button;
