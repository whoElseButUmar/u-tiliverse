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
  <div className="w-full bg-slate-800 rounded-lg shadow-lg p-6 flex flex-col gap-4 max-w-md">
    <h2 className="text-2xl font-bold text-center text-green-500">
      Mission Codec Card Maker
    </h2>
    <input
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="Mission Number"
      name="missionNumber"
      value={formData.missionNumber}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="Mission Title"
      name="missionTitle"
      value={formData.missionTitle}
      onChange={handleInputChange}
    />
    <textarea
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="Reason"
      name="reason"
      value={formData.reason}
      onChange={handleInputChange}
      rows={3}
    />
    <input
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="Start Time"
      name="startTime"
      type="time"
      value={formData.startTime}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="End Time"
      name="endTime"
      type="time"
      value={formData.endTime}
      onChange={handleInputChange}
    />
    <input
      className="w-full p-2  border rounded bg-slate-700 text-white"
      placeholder="Commit Link"
      name="commitLink"
      value={formData.commitLink}
      onChange={handleInputChange}
    />
  </div>
);
