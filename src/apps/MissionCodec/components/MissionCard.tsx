import React from "react";
import * as htmlToImage from "html-to-image";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

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
}) => {
  const downloadImage = () => {
    const node = document.getElementById("mission-card");

    if (node) {
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "mission-card.png";
          link.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div
        id="mission-card"
        className="w-[40rem] min-h-96 h-auto bg-slate-800 border-4 gap-6 p-6 flex flex-col justify-between border-green-500 rounded-xl shadow-xl"
      >
        <div className="h-full flex flex-col gap-6">
          <div className="flex flex-col gap-3 tracking-widest">
            <h3 className="text-3xl font-bold text-green-500">
              MISSION {missionNumber}
            </h3>
            <p className="text-xl text-white">{missionTitle}</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-start">
            <h4 className="text-green-500 font-bold">Brief:</h4>
            <p className="text-white text-base break-all">{brief}</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3  h-9">
            <FaRegClock className="w-5 h-5 text-green-500 " />
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">Started:</span>
              <span className=" bg-slate-900  px-2 py-1 rounded-md">
                {startTime ? startTime : "TBA"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 h-9">
            <FaRegCheckCircle className="w-5 h-5 text-green-500 " />
            <div className="flex items-center gap-1">
              <span className="text-white font-bold">Ended:</span>
              <span className=" bg-slate-900  px-2 py-1 rounded-md">
                {endTime ? endTime : "TBA"}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 w-full h-9">
            <FaGithub className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <a
              href={commitLink}
              className="text-blue-400 underline break-all  bg-slate-900 px-2 py-1 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              {commitLink ? commitLink : "TBA"}
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={downloadImage}
        className=" bg-green-500 flex items-center w-fit gap-3 self-end text-white px-4 py-2 rounded"
      >
        <FaDownload className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
};
