import React, { useState } from "react";
import { IoIosCode } from "@react-icons/all-files/io/IoIosCode";
import { AppId } from "../../types/app";
import { AppCard } from "./components/AppCard";

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
    <div className="min-h-screen flex flex-col gap-12 bg-slate-900 text-white font-mono">
      <header className="bg-slate-800 py-6 px-4 gap-8 flex items-center">
        <img
          src="/u-tiliverse-logo.svg"
          alt="uTiliverse Logo"
          className="w-24 h-24"
        />
        <div className=" ">
          <h1 className="text-4xl font-bold text-green-500">uTiliverse</h1>
          <p className="text-xl text-slate-300 mt-2">
            Your universe of developer utilities
          </p>
        </div>
      </header>

      <main className="grow px-12 flex flex-col gap-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 bg-slate-700 text-white border border-slate-600 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="flex flex-wrap gap-6">
          {filteredApps.map((app) => (
            <div key={app.id} className="w-full sm:w-1/2 lg:w-1/4">
              <AppCard
                title={app.title}
                description={app.description}
                icon={app.icon}
                onClick={() => onAppSelect(app.id)}
              />
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <p className="text-center text-slate-400">
            No apps found matching your search.
          </p>
        )}
      </main>

      <footer className="bg-slate-800 py-6">
        <div className="grow text-center">
          <p>
            &copy; {new Date().getFullYear()} uTiliverse. Made with{" "}
            <span className="text-green-500">❤️</span> by{" "}
            <a
              href="https://github.com/whoElseButUmar"
              target="_blank"
              className="text-green-500 hover:underline underline-offset-4 hover:text-green-400"
            >
              WhoElseButUmar
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
    icon: <IoIosCode className="w-8 h-8 text-green-500" aria-hidden="true" />,
    id: "missioncodec",
  },
];
