import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import MissionCodec from "./apps/MissionCodec";
import { AppId } from "./types/app";

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
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl">App {currentApp} is under development</p>
        </div>
      )}

      {deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInstallClick}
            className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          >
            Install App
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default App;
