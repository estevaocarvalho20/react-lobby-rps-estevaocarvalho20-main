import { avatars } from "./Avatars";

export function PlayerInfo({ playerName, playerAvatar }) {
  const avatar = avatars.find((item) => item.key === playerAvatar);
  return (
    <section aria-labelledby="player-info-heading" className="card">
      <h2 id="player-info-heading">Player Info</h2>
      <div role="status" aria-live="polite" data-testid="greeting">
        {playerName ? `Welcome ${playerName}!` : null}
      </div>
      <div className="player-avatar">
        {avatar && <img id="current-avatar" src={avatar.image} alt={`${avatar.key} avatar`} />}
        <span>{playerName}</span>
      </div>
    </section>
  );
}