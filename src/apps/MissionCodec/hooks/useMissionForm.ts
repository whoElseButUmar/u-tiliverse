import { useState } from "react";

interface MissionFormData {
  missionNumber: string;
  missionTitle: string;
  brief: string;
  startTime: string;
  endTime: string;
  commitLink: string;
}

export const useMissionForm = () => {
  const [formData, setFormData] = useState<MissionFormData>({
    missionNumber: "",
    missionTitle: "",
    brief: "",
    startTime: "",
    endTime: "",
    commitLink: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return { formData, handleInputChange };
};
