import React from "react";
import { motion } from "framer-motion";
import { IoAlertCircleOutline } from "@react-icons/all-files/io5/IoAlertCircleOutline";

type AppCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  accentColor: string;
  comingSoon?: boolean;
};

export const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  icon,
  onClick,
  accentColor,
  comingSoon = false,
}) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
    className={`bg-slate-800 border-l-8 border-l-${accentColor}-400 p-6 rounded-lg shadow-lg cursor-pointer flex flex-col gap-3 group relative`}
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
        className={`text-${accentColor}-400 group-hover:text-${accentColor}-300 transition-colors duration-300`}
      >
        {icon}
      </motion.div>
      <h3
        className={`text-xl font-bold text-white group-hover:text-${accentColor}-300 transition-colors duration-300`}
      >
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
    {comingSoon && (
      <motion.div
        className={`absolute top-2 right-2 flex items-center gap-1 bg-${accentColor}-400 text-slate-800 px-2 py-1 rounded-full text-xs font-semibold`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <IoAlertCircleOutline size={12} />
        Coming Soon
      </motion.div>
    )}
  </motion.div>
);
