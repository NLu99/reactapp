import { useState } from "react";

/**
 * Renders the letter input interface used for guessing a single character.
 *
 * The component validates that the input is a single alphabetical character
 * before submitting guess to the parent component.
 *
 * @param {{ onGuess: function(string): void, disabled: boolean }} props Component props.
 * @param {function(string): void} props.onGuess Callback with the guessed letter
 * @param {boolean} props.disabled  Whether the input and button are disabled
 * @return {JSX.Element} The rendered letter input and submit button.
 */
export default function LetterInput({ onGuess, disabled }) {
  /** @const {[string, function(string): void]} Input state */
  const [value, setValue] = useState('');

  /**
   * Handles submission of the current letter guess.
   *
   * Only allows a single alphabetical character. If valid,
   * guess is sent to the parent and the input is cleared.
   */
  const submit = () => {
    if (value.match(/^[a-zA-Z]$/)) {
      onGuess(value.toLowerCase());
      setValue("");
    }
  };

  return (
    <div>
      <h2>Guess the letter:</h2>

      <div className="letter-input">
      <input
        maxLength={1}
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={submit} disabled={disabled} className="primary">
        Guess
      </button>
      </div>
    </div>
  );
}
