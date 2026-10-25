import { GameSection } from "./game/GameSection";
import { PlayerInfo } from "./game/PlayerInfo";

export function GameView({ playerName, playerAvatar, difficulty, onBackToSettings }) {
  return (
    <section>
      <header>
        <h2>Rock Paper Scissors</h2>
        <nav>
          <button type="button" onClick={onBackToSettings} className="nav-link">
            ← Back to Settings
          </button>
        </nav>
      </header>
      <PlayerInfo playerName={playerName} playerAvatar={playerAvatar} />
      <GameSection difficulty={difficulty} />
    </section>
  );
}
