import React from "react";
import { motion } from "framer-motion";
import { useNoteForm } from "./hooks/useNoteForm";
import { NoteForm } from "./components/NoteForm";
import { NoteCard } from "./components/NoteCard";
import { AppId } from "../../types/app";
import { BackButton } from "../../lib/BackButton";

interface NotesCodecProps {
  onBack: (returnTo: AppId | null) => void;
}

const NoteCodec: React.FC<NotesCodecProps> = ({ onBack }) => {
  const { formData, handleInputChange } = useNoteForm();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center p-6 gap-12 md:gap-24 font-sans bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen w-screen text-white"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <BackButton onBack={onBack} />
      </motion.div>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center md:items-start justify-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-auto"
        >
          <NoteForm formData={formData} handleInputChange={handleInputChange} />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-auto"
        >
          <NoteCard {...formData} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NoteCodec;
