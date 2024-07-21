import React from "react";
import { motion } from "framer-motion";

type AppCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  icon,
  onClick,
}) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className="bg-slate-800 border-l-8 border-l-green-400 p-6 rounded-lg shadow-lg cursor-pointer flex flex-col gap-3 group"
  >
    <motion.div
      className="flex items-center gap-3"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-green-400 group-hover:text-green-300 transition-colors duration-300"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
        {title}
      </h3>
    </motion.div>
    <motion.p
      className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {description}
    </motion.p>
  </motion.div>
);
