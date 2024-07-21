import { useState } from "react";

interface MissionFormData {
  missionNumber: string;
  missionTitle: string;
  reason: string;
  startTime: string;
  endTime: string;
  commitLink: string;
}

export const useMissionForm = () => {
  const [formData, setFormData] = useState<MissionFormData>({
    missionNumber: "8",
    missionTitle: "Restructure the ColorConfigBlock",
    reason:
      "Refactor the ColorConfigBlock component to have the same structure so that it is easy to use and maintain + refactor the filterOptions.ts to be more universal and not strictly to toggle buttons type",
    startTime: "15:00 PM",
    endTime: "16:06 PM",
    commitLink:
      "https://github.com/mujud/pathways/commit/bdc66c70caefa038252b63861720beae4c13a5d4",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return { formData, handleInputChange };
};
