import React from "react";
import { motion } from "framer-motion";

interface MissionFormProps {
  formData: {
    missionNumber: string;
    missionTitle: string;
    brief: string;
    startTime: string;
    endTime: string;
    commitLink: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const MissionForm: React.FC<MissionFormProps> = ({
  formData,
  handleInputChange,
}) => {
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col gap-4 max-w-md border border-green-400/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center text-green-400"
      >
        Mission Codec Card Maker
      </motion.h2>
      {Object.entries(formData).map(([key, value], index) => (
        <motion.div
          key={key}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2 }}
        >
          {key === "brief" || key === "commitLink" ? (
            <textarea
              className="w-full p-3 border border-slate-600 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
              placeholder={getPlaceholder(key)}
              name={key}
              value={value}
              onChange={handleInputChange}
              rows={key === "brief" ? 3 : 2}
            />
          ) : (
            <input
              className="w-full p-3 border border-slate-600 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
              placeholder={getPlaceholder(key)}
              name={key}
              type={key.includes("Time") ? "time" : "text"}
              value={value}
              onChange={handleInputChange}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

const getPlaceholder = (key: string): string => {
  const placeholders: { [key: string]: string } = {
    missionNumber: "Mission Number",
    missionTitle: "Mission Title",
    brief: "Brief description of the mission",
    startTime: "Start Time",
    endTime: "End Time",
    commitLink: "GitHub Commit Link",
  };
  return placeholders[key] || key.charAt(0).toUpperCase() + key.slice(1);
};
