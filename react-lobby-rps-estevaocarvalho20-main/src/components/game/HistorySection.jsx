export function HistorySection({ history }) {
  return (
    <ul id="history" aria-live="polite" style={{ textAlign: "left" }}>
      {history.map((round, index) => (
        <li key={`${round.player}-${round.cpu}-${index}`}>
          Player({round.player}) vs CPU({round.cpu}): {round.msg}
        </li>
      ))}
    </ul>
  );
}
