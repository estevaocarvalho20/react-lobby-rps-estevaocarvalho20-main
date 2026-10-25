import "./App.css";
import { useState } from "react";
import { GameView } from "./components/Game";
import { LobbyView } from "./components/Lobby";
import { loadSettings, saveSettings } from "./logic/settings";

export function App() {
  const initialSettings = loadSettings() || {
    name: "",
    difficulty: "normal",
    avatar: undefined,
    darkMode: false,
  };
  const [view, setView] = useState("settings");
  const [name, setName] = useState(initialSettings.name);
  const [avatar, setAvatar] = useState(initialSettings.avatar);
  const [difficulty, setDifficulty] = useState(initialSettings.difficulty || "normal");
  const [darkMode, setDarkMode] = useState(initialSettings.darkMode);
  const [isSettingsSaved, setIsSettingsSaved] = useState(
    Boolean(initialSettings.name && initialSettings.avatar),
  );
  const currentTheme = darkMode ? "theme-dark" : "theme-light";

  const updateSetting = (setter) => (value) => {
    setter(value);
    setIsSettingsSaved(false);
  };

  const onGameStart = () => {
    if (isSettingsSaved) setView("game");
  };

  const onSettingsSave = () => {
    if (!name.trim() || !avatar) return;
    saveSettings({ name: name.trim(), avatar, difficulty, darkMode });
    setName(name.trim());
    setIsSettingsSaved(true);
  };

  const onBackToSettings = () => {
    setView("settings");
  };

  return (
    <main className={currentTheme}>
      <h1>Games Lobby & Rock Paper Scissors</h1>
      {view === "settings" && (
        <LobbyView
          onGameStart={onGameStart}
          onSettingsSave={onSettingsSave}
          isSettingsSaved={isSettingsSaved}
          name={name}
          setName={updateSetting(setName)}
          avatar={avatar}
          setAvatar={updateSetting(setAvatar)}
          difficulty={difficulty}
          setDifficulty={updateSetting(setDifficulty)}
          darkMode={darkMode}
          setDarkMode={updateSetting(setDarkMode)}
        />
      )}
      {view === "game" && (
        <GameView
          playerName={name}
          playerAvatar={avatar}
          difficulty={difficulty}
          onBackToSettings={onBackToSettings}
        />
      )}
    </main>
  );
}
