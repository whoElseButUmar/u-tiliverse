import React, { useRef } from "react";
import { motion } from "framer-motion";
import * as htmlToImage from "html-to-image";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

interface MissionCardProps {
  missionNumber: string;
  missionTitle: string;
  brief: string;
  startTime: string;
  endTime: string;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  missionNumber,
  missionTitle,
  brief,
  startTime,
  endTime,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadImage = () => {
    const node = cardRef.current;
    const currentDateFormatted = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    if (node) {
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `mission-${missionNumber}-${missionTitle}-${startTime}-${endTime}-${currentDateFormatted}.png`;
          link.click();
        })
        .catch((error) => {
          console.error("Error generating image:", error);
        });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5"
    >
      <motion.div
        ref={cardRef}
        id="mission-card"
        className="w-full md:w-[40rem] min-h-96 h-auto bg-slate-800 border gap-6 p-6 flex flex-col justify-between border-green-400 rounded-xl shadow-xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 20px rgba(34, 197, 94, 0.2), 0 0 8px rgba(34, 197, 94, 0.1) inset",
        }}
        whileHover={{
          boxShadow:
            "0 0 25px rgba(34, 197, 94, 0.3), 0 0 12px rgba(34, 197, 94, 0.2) inset",
        }}
      >
        <div className="h-full flex flex-col gap-6">
          <motion.div
            className="flex flex-col gap-3 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-black text-green-400">
              MISSION {missionNumber}
            </h3>
            <p className="text-xl text-white">{missionTitle}</p>
          </motion.div>
          <motion.div
            className="bg-slate-700 p-4 rounded-lg flex flex-col items-start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-green-400 font-bold">Brief:</h4>
            <p className="text-white min-h-40 text-base break-all font-mono whitespace-pre-wrap">
              {brief}
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InfoItem icon={<FaRegClock />} label="Started:" value={startTime} />
          <InfoItem
            icon={<FaRegCheckCircle />}
            label="Ended:"
            value={endTime}
          />
        </motion.div>
      </motion.div>
      <button
        onClick={downloadImage}
        disabled={!missionTitle || !brief || !missionNumber}
        className="bg-green-500 flex items-center w-fit gap-3 self-end text-white px-4 py-2 rounded-full disabled:cursor-not-allowed disabled:opacity-70 hover:bg-green-600 transition-all ease-in-out duration-300 hover:scale-105 disabled:scale-100 disabled:hover:bg-green-500"
        title="Download Card as PNG"
      >
        <FaDownload className="size-5" aria-hidden="true" />
        <span>Download as PNG</span>
      </button>
    </motion.div>
  );
};

const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value = false }) => (
  <div className="flex items-start gap-3 ">
    <div className="flex items-start gap-2">
      <span className="text-white flex items-center gap-2 font-bold">
        <span className="text-green-400">{icon}</span>
        {label}
      </span>
      <span className="bg-slate-900 px-2 py-1 font-mono rounded-md">
        {value || "N/A"}
      </span>
    </div>
  </div>
);
