import React from "react";

import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

interface MissionCardProps {
  missionNumber: string;
  missionTitle: string;
  brief: string;
  startTime: string;
  endTime: string;
  commitLink: string;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  missionNumber,
  missionTitle,
  brief,
  startTime,
  endTime,
  commitLink,
}) => (
  <div className="w-96 min-h-96 h-auto bg-slate-800 border-4 gap-6 p-6 flex flex-col justify-between border-green-500 rounded-xl shadow-xl ">
    <div className=" h-full flex flex-col gap-6 ">
      <div className="flex flex-col gap-3 tracking-widest">
        <h3 className="text-3xl font-bold text-green-500">
          MISSION {missionNumber}
        </h3>
        <p className="text-xl text-white">{missionTitle}</p>
      </div>
      <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-start">
        <h4 className="text-green-500 font-bold ">Brief:</h4>
        <p className="text-white text-base">{brief}</p>
      </div>
    </div>

    <div className="flex flex-col items-start gap-3 ">
      <div className="flex items-center gap-3">
        <FaRegClock className="w-5 h-5 text-green-500 " />
        <span className="text-white">Started: {startTime}</span>
      </div>
      <div className="flex items-center gap-3">
        <FaRegCheckCircle className="w-5 h-5 text-green-500 " />
        <span className="text-white">Ended: {endTime}</span>
      </div>
      <div className="flex items-start gap-3 w-full">
        <FaGithub className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
        <a
          href={commitLink}
          className="text-blue-400 underline break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          {commitLink}
        </a>
      </div>
    </div>
  </div>
);
