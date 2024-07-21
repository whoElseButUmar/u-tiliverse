import React from "react";

import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

interface MissionCardProps {
  missionNumber: string;
  missionTitle: string;
  reason: string;
  startTime: string;
  endTime: string;
  commitLink: string;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  missionNumber,
  missionTitle,
  reason,
  startTime,
  endTime,
  commitLink,
}) => (
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
);
