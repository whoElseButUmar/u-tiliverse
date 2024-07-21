import React from "react";

interface MissionFormProps {
  formData: {
    missionNumber: string;
    missionTitle: string;
    reason: string;
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
}) => (
  <div className="w-full max-w-md bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
      MGS Dev Mission Card Maker
    </h2>
    <input
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="Mission Number"
      name="missionNumber"
      value={formData.missionNumber}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="Mission Title"
      name="missionTitle"
      value={formData.missionTitle}
      onChange={handleInputChange}
    />
    <textarea
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="Reason"
      name="reason"
      value={formData.reason}
      onChange={handleInputChange}
      rows={3}
    />
    <input
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="Start Time"
      name="startTime"
      value={formData.startTime}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="End Time"
      name="endTime"
      value={formData.endTime}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2 mb-4 border rounded bg-slate-700 text-white"
      placeholder="Commit Link"
      name="commitLink"
      value={formData.commitLink}
      onChange={handleInputChange}
    />
  </div>
);
