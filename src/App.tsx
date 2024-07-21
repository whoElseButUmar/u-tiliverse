import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import MissionCodec from "./apps/MissionCodec";
import { AppId } from "./types/app";

const App: React.FC = () => {
  const [currentApp, setCurrentApp] = useState<AppId | null>(null);

  const handleNavigate = (appId: AppId | null) => {
    setCurrentApp(appId);
  };

  return (
    <div>
      {currentApp === null ? (
        <LandingPage onAppSelect={handleNavigate} />
      ) : currentApp === "missioncodec" ? (
        <MissionCodec onBack={handleNavigate} />
      ) : (
        <div>App {currentApp} is under development</div>
      )}
    </div>
  );
};

export default App;
