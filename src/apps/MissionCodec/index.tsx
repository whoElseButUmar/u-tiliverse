import React from "react";
import { motion } from "framer-motion";
import { useMissionForm } from "./hooks/useMissionForm";
import { MissionForm } from "./components/MissionForm";
import { MissionCard } from "./components/MissionCard";
import { AppId } from "../../types/app";
import { BackButton } from "../utils/BackButton";

interface MissionCodecProps {
  onBack: (returnTo: AppId | null) => void;
}

const MissionCodec: React.FC<MissionCodecProps> = ({ onBack }) => {
  const { formData, handleInputChange } = useMissionForm();

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
          <MissionForm
            formData={formData}
            handleInputChange={handleInputChange}
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-auto"
        >
          <MissionCard {...formData} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionCodec;
