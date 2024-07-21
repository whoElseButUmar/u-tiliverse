import React from "react";
import { useMissionForm } from "./hooks/useMissionForm";
import { MissionForm } from "./components/MissionForm";
import { MissionCard } from "./components/MissionCard";
import { AppId } from "../../types/app";
import { BackButton } from "../utils/BackButton";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
interface MissionCodecProps {
  onBack: (returnTo: AppId | null) => void;
}

const MissionCodec: React.FC<MissionCodecProps> = ({ onBack }) => {
  const { formData, handleInputChange } = useMissionForm();

  return (
    <div className="flex flex-col items-center p-6 gap-24 font-mono bg-slate-900 min-h-screen w-screen">
      <BackButton onBack={onBack} />
      <div className="w-full flex gap-12 items-start justify-center">
        <MissionForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <div className="h-96 flex items-center justify-center ">
          <FaLongArrowAltRight
            className="size-16 text-green-500"
            aria-hidden="true"
          />
        </div>
        <MissionCard {...formData} />
      </div>
    </div>
  );
};

export default MissionCodec;
