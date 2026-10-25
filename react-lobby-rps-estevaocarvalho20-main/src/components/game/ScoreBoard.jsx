export const ScoreBoard = ({ scores }) => {
  return (
    <div className="score-row">
      <span>Player: <strong id="score-player">{scores.player}</strong></span>
      <span>CPU: <strong id="score-cpu">{scores.cpu}</strong></span>
      <span>Ties: <strong id="score-ties">{scores.ties}</strong></span>
    </div>
  );
};
