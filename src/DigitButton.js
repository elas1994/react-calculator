import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit, nameOfClass }) {
  return (
    <button
      className={nameOfClass}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
