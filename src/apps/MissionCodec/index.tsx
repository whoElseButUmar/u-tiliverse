import React from "react";
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
    <div className="flex flex-col items-center p-4 bg-slate-900 min-h-screen w-screen">
      <BackButton onBack={onBack} />
      <MissionForm formData={formData} handleInputChange={handleInputChange} />
      <MissionCard {...formData} />
    </div>
  );
};

export default MissionCodec;
