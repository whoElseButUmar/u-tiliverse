import { useState } from "react";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
const MissionCodec = () => {
  const [missionNumber, setMissionNumber] = useState("8");
  const [missionTitle, setMissionTitle] = useState(
    "Restructure the ColorConfigBlock"
  );
  const [reason, setReason] = useState(
    "Refactor the ColorConfigBlock component to have the same structure so that it is easy to use and maintain + refactor the filterOptions.ts to be more universal and not strictly to toggle buttons type"
  );
  const [startTime, setStartTime] = useState("15:00 PM");
  const [endTime, setEndTime] = useState("16:06 PM");
  const [commitLink, setCommitLink] = useState(
    "https://github.com/mujud/pathways/commit/bdc66c70caefa038252b63861720beae4c13a5d4"
  );

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 min-h-screen">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-500">
          MGS Dev Mission Card Maker
        </h2>
        <input
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="Mission Number"
          value={missionNumber}
          onChange={(e) => setMissionNumber(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="Mission Title"
          value={missionTitle}
          onChange={(e) => setMissionTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
        />
        <input
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-white"
          placeholder="Commit Link"
          value={commitLink}
          onChange={(e) => setCommitLink(e.target.value)}
        />
      </div>

      <div className="w-96 h-144 bg-gray-800 border-4 border-green-500 rounded-xl shadow-xl overflow-hidden">
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold text-green-500 mb-2">
              MISSION {missionNumber}
            </h3>
            <p className="text-xl text-white mb-4">{missionTitle}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <h4 className="text-green-500 font-bold mb-2">REASON:</h4>
            <p className="text-white text-sm">{reason}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaRegClock className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-white">Started: {startTime}</span>
            </div>
            <div className="flex items-center">
              <FaRegCheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-white">Ended: {endTime}</span>
            </div>
            <div className="flex items-center">
              <FaGithub className="w-5 h-5 text-green-500 mr-2" />
              <a
                href={commitLink}
                className="text-blue-400 underline truncate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commit Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionCodec;
