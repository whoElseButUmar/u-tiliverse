import React from "react";
import { motion } from "framer-motion";

interface NotesFormProps {
  formData: {
    title: string;
    content: string;
    tags: string;
    createdAt: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const NoteForm: React.FC<NotesFormProps> = ({
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
      className="w-full bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col gap-4 max-w-md border border-blue-400"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center text-blue-400 mb-2"
      >
        Notes Codec
      </motion.h2>
      {Object.entries(formData).map(([key, value], index) => (
        <motion.div
          key={key}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.2 }}
          className="flex flex-col gap-1"
        >
          <motion.label
            htmlFor={key}
            className="text-sm font-medium text-blue-400 mb-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 0.1 }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </motion.label>
          {key === "content" ? (
            <textarea
              id={key}
              className="w-full p-3 border border-blue-600 rounded-md bg-blue-700/40 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              placeholder={`Enter note ${key}`}
              name={key}
              value={value}
              onChange={handleInputChange}
              rows={4}
            />
          ) : (
            <input
              id={key}
              className="w-full p-3 border border-blue-600 rounded-md bg-blue-700/40 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              placeholder={`Enter note ${key}`}
              name={key}
              type={key === "createdAt" ? "datetime-local" : "text"}
              value={value}
              onChange={handleInputChange}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
