import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "@react-icons/all-files/io5/IoCloseCircleOutline";
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
  const [tags, setTags] = useState<string[]>(
    formData.tags ? formData.tags.split(",").map((tag) => tag.trim()) : []
  );
  const [currentTag, setCurrentTag] = useState("");

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentTag(value);

    if (value.endsWith(",")) {
      const newTag = value.slice(0, -1).trim();
      if (newTag && !tags.includes(newTag)) {
        const updatedTags = [...tags, newTag];
        setTags(updatedTags);
        handleInputChange({
          target: { name: "tags", value: updatedTags.join(", ") },
        } as React.ChangeEvent<HTMLInputElement>);
      }
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    handleInputChange({
      target: { name: "tags", value: updatedTags.join(", ") },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col gap-4 min-w-20 max-w-md border border-blue-400"
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
          ) : key === "tags" ? (
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag)}
                      className="ml-1 focus:outline-none"
                    >
                      <IoCloseCircleOutline size={15} />
                    </button>
                  </motion.span>
                ))}
              </div>
              <input
                id={key}
                className="w-full p-3 border border-blue-600 rounded-md bg-blue-700/40 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                placeholder="Enter tags (comma-separated)"
                name={key}
                value={currentTag}
                onChange={handleTagInput}
              />
            </div>
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
