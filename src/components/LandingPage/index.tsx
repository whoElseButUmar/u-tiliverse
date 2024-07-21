import React, { useState } from "react";
import { IoIosCode } from "@react-icons/all-files/io/IoIosCode";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { AppId } from "../../types/app";
import { AppCard } from "./components/AppCard";
import { motion } from "framer-motion";

type LandingPageProps = {
  onAppSelect: (id: AppId) => void;
};

export const LandingPage = ({ onAppSelect }: LandingPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
      <header className="bg-slate-800 py-8 px-6 shadow-lg">
        <motion.div
          className="container mx-auto flex items-center justify-between"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-6">
            <img
              src="/u-tiliverse-logo.svg"
              alt="uTiliverse Logo"
              className="w-16 h-16 md:w-24 md:h-24"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-green-400 tracking-wide">
                uTiliverse
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mt-2">
                Your universe of developer utilities
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      <main className="grow container mx-auto px-4 md:px-6 py-12 flex flex-col gap-8">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 bg-slate-700 text-white border border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <AppCard
                title={app.title}
                description={app.description}
                icon={app.icon}
                onClick={() => onAppSelect(app.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredApps.length === 0 && (
          <motion.p
            className="text-center text-slate-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No apps found matching your search.
          </motion.p>
        )}
      </main>

      <footer className="bg-slate-800 py-6 shadow-inner">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            &copy; {new Date().getFullYear()} uTiliverse. Made with{" "}
            <span className="text-green-400">❤️</span> by{" "}
            <a
              href="https://github.com/whoElseButUmar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline underline-offset-4 hover:text-green-300 transition-colors duration-300"
            >
              @whoElseButUmar
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const apps: Array<{
  title: string;
  description: string;
  icon: React.ReactNode;
  id: AppId;
}> = [
  {
    title: "MissionCodec",
    description: "Create dev mission cards to log your progress with ease",
    icon: <IoIosCode className="w-8 h-8 text-green-400" aria-hidden="true" />,
    id: "missioncodec",
  },
];
