import { capitalize } from "../../utils/string_formatting"

export function MoveButton({label, onClick}) {
  return (
    <button type="button" data-move={label} onClick={onClick}>
      {capitalize(label)}
    </button>
  );
}