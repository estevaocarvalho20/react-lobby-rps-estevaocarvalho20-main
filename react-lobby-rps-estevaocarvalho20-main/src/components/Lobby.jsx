
import { capitalize } from "../utils/string_formatting"
import { avatars } from "./game/Avatars";

export const LobbyView = ({
  onGameStart,
  name,
  setName,
  avatar,
  setAvatar,
  difficulty,
  setDifficulty,
  darkMode,
  setDarkMode,
  onSettingsSave,
  isSettingsSaved,
}) => {
  const isGameStartEnabled = isSettingsSaved && avatar !== undefined && name.trim() !== "";
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSettingsSave();
  };
  return (
    <section aria-labelledby="settings-heading" className="card">
      <h2 id="settings-heading">Player Settings Lobby</h2>
      <div role="status" aria-live="polite" data-testid="greeting">
        {name ? `Hello ${name}` : null}

        <div
          data-testid="errors"
          aria-live="polite"
          className="errors"
          aria-atomic="true"
        ></div>
        <form id="settings-form" onSubmit={handleFormSubmit} noValidate>
          <div className="field">
            <label htmlFor="player-name">Player Name</label>
            <input
              id="player-name"
              name="player-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              minLength={2}
              maxLength={15}
            />
          </div>

          <fieldset>
            <legend>Choose an Avatar</legend>
            <div className="avatar-options">
              {avatars.map((a) => (
                <label key={a.key} className="avatar-option">
                  <input
                    type="radio"
                    name="avatar"
                    value={a.key}
                    checked={a.key === avatar}
                    onChange={() => setAvatar(a.key)}
                  />
                  <img src={a.image} alt={a.key} />
                  <span>{capitalize(a.key)}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="difficulty">Difficulty</label>
            <select id="difficulty" name="difficulty" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
              <option value="easy">easy</option>
              <option value="normal">normal</option>
              <option value="hard">hard</option>
            </select>
          </div>

          <div className="field checkbox">
            <label>
              <input id="theme-toggle" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> Dark Theme
            </label>
          </div>

          <button id="save-settings" type="submit">Save Settings</button>

          <div className="game-actions">
            <button id="start-game" type="button" onClick={onGameStart} disabled={!isGameStartEnabled}>
              Start Game
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
