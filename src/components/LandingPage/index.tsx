import React from "react";
import { IoIosCode } from "@react-icons/all-files/io/IoIosCode";
import { AppId } from "../../types/app";
import { AppCard } from "./components/AppCard";

type LandingPageProps = {
  onAppSelect: (id: AppId) => void;
};

export const LandingPage = ({ onAppSelect }: LandingPageProps) => {
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

      <main className=" grow px-12 flex flex-col gap-4 ">
        <div className="flex flex-wrap gap-6 ">
          {apps.map((app) => (
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
      </main>

      <footer className="bg-slate-800 py-6">
        <div className=" grow  text-center">
          <p>&copy; 2024 u-tiliverse. All rights reserved.</p>
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
