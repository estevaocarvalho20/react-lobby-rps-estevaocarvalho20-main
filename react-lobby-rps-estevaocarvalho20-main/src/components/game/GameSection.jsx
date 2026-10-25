import { GameHeader } from "./GameHeader";
import { HistorySection } from "./HistorySection";
import { beats, getCpuMove, decideWinner, nextScore } from "../../logic/game";
import { ScoreBoard } from "./ScoreBoard";
import { useState } from "react";
import { MoveButton } from "./MoveButton";

export const GameSection = ({ difficulty }) => {
  const moves = Object.keys(beats);
  const [score, setScore] = useState({ player: 0, cpu: 0, ties: 0 });
  const [history, setHistory] = useState([]);
  const [lastPlayerMove, setLastPlayerMove] = useState(null);

  const playRound = (move) => {
    const cpuMove = getCpuMove({ difficulty, lastPlayerMove });
    const outcome = decideWinner(move, cpuMove);
    const msg = outcome === "player" ? "You win!" : outcome === "cpu" ? "CPU wins!" : "Tie.";
    setScore((currentScore) => nextScore(currentScore, outcome));
    setHistory((currentHistory) => [{ player: move, cpu: cpuMove, msg }, ...currentHistory]);
    setLastPlayerMove(move);
  };

  const resetGame = () => {
    setScore({ player: 0, cpu: 0, ties: 0 });
    setHistory([]);
    setLastPlayerMove(null);
  };

  return (
    <section aria-labelledby="game-heading" className="card">
      <GameHeader difficulty={difficulty} />
      <ScoreBoard scores={score} />
      <div className="buttons">
        {moves.map((move) => (
          <MoveButton key={move} label={move} onClick={() => playRound(move)} />
        ))}
      </div>
      <HistorySection history={history} />
      <div className="buttons">
        <button id="reset-game" type="button" onClick={resetGame}>Reset Game</button>
      </div>
    </section>
  );
};
