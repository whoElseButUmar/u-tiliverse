import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import MissionCodec from "./apps/MissionCodec";
import { AppId } from "./types/app";
import UnderDevelopment from "./components/UnderDevelopment";
import NoteCodec from "./apps/NoteCodec";

const InstallButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="hover:scale-105 transition-all duration-200 ease-in-out">
      <button
        onClick={onClick}
        className="relative z-10 bg-blue-500 text-white px-5 py-2 rounded-md shadow-md font-semibold text-base overflow-hidden"
      >
        <span className="relative z-10">Install App</span>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [currentApp, setCurrentApp] = useState<AppId | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleNavigate = (appId: AppId | null) => {
    setCurrentApp(appId);
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white font-sans">
      {currentApp === null ? (
        <LandingPage onAppSelect={handleNavigate} />
      ) : currentApp === "missioncodec" ? (
        <MissionCodec onBack={handleNavigate} />
      ) : currentApp === "notecodec" ? (
        <NoteCodec onBack={handleNavigate} />
      ) : (
        <UnderDevelopment appName={currentApp} onBack={handleNavigate} />
      )}

      {deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <InstallButton onClick={handleInstallClick} />
        </motion.div>
      )}
    </div>
  );
};

export default App;
