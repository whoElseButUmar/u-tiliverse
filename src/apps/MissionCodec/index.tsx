import React from "react";
import { useMissionForm } from "./hooks/useMissionForm";
import { MissionForm } from "./components/MissionForm";
import { MissionCard } from "./components/MissionCard";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { AppId } from "../../types/app";

interface MissionCodecProps {
  onBack: (returnTo: AppId | null) => void;
}

const MissionCodec: React.FC<MissionCodecProps> = ({ onBack }) => {
  const { formData, handleInputChange } = useMissionForm();

  const handleBack = () => {
    onBack(null); // null indicates return to the landing page
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen">
      <div className="w-full max-w-md mb-4">
        <button
          onClick={handleBack}
          className="flex items-center text-green-500 hover:text-green-400 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Landing Page
        </button>
      </div>
      <MissionForm formData={formData} handleInputChange={handleInputChange} />
      <MissionCard {...formData} />
    </div>
  );
};

export default MissionCodec;
