import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import MissionCodec from "./apps/MissionCodec";
import { AppId } from "./types/app";

function App() {
  const [selectedApp, setSelectedApp] = useState<AppId | null>(null);

  const handleAppSelect = (appId: AppId) => {
    setSelectedApp(appId);
  };

  return (
    <div className=" min-h-screen w-screen">
      {selectedApp === null ? (
        <LandingPage onAppSelect={handleAppSelect} />
      ) : selectedApp === "missioncodec" ? (
        <MissionCodec />
      ) : null}
    </div>
  );
}

export default App;
