import React, { useRef } from "react";
import { motion } from "framer-motion";
import * as htmlToImage from "html-to-image";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { FaTags } from "@react-icons/all-files/fa/FaTags";
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";

interface NoteCardProps {
  title: string;
  content: string;
  tags: string;
  createdAt: string;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  title,
  content,
  tags,
  createdAt,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadImage = () => {
    const node = cardRef.current;
    if (node) {
      htmlToImage
        .toPng(node)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `note-${title}-${createdAt}.png`;
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
        id="note-card"
        className="w-full md:w-[40rem] min-h-96 h-auto bg-blue-800/35 border gap-6 p-6 flex flex-col justify-between border-blue-400 rounded-xl shadow-xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 20px rgba(59, 130, 246, 0.2), 0 0 8px rgba(59, 130, 246, 0.1) inset",
        }}
        whileHover={{
          boxShadow:
            "0 0 25px rgba(59, 130, 246, 0.3), 0 0 12px rgba(59, 130, 246, 0.2) inset",
        }}
      >
        <div className="h-full flex flex-col gap-6">
          <motion.div
            className="flex flex-col gap-3 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-3xl font-black text-blue-400">{title}</h3>
          </motion.div>
          <motion.div
            className="bg-blue-700/50 p-4 rounded-lg flex flex-col items-start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-blue-400 font-bold">Content:</h4>
            <p className="text-white text-base break-words font-mono whitespace-pre-wrap">
              {content}
            </p>
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InfoItem icon={<FaTags />} label="Tags:" value={tags} />
          <InfoItem
            icon={<FaRegClock />}
            label="Created:"
            value={new Date(createdAt).toLocaleString()}
          />
        </motion.div>
      </motion.div>
      <button
        onClick={downloadImage}
        disabled={!title || !content}
        className="bg-blue-500 flex items-center w-fit gap-3 self-end text-white px-4 py-2 rounded-full disabled:cursor-not-allowed disabled:opacity-70 hover:bg-blue-600 transition-all ease-in-out duration-300 hover:scale-105 disabled:scale-100 disabled:hover:bg-blue-500"
        title="Download Note as PNG"
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
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 h-9">
    <span className="text-blue-400">{icon}</span>
    <div className="flex items-center gap-1">
      <span className="text-white font-bold">{label}</span>
      <span className="bg-blue-900 px-2 py-1 font-mono rounded-md">
        {value || "N/A"}
      </span>
    </div>
  </div>
);
