/**
 * Array of hangman body parts, ordered by the sequence
 * in which they are revealed for incorrect guesses.
 * @type {string[]}
 */
const parts = [
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

/**
 * Renders the hangman body parts based on the
 * number of incorrect guesses made by the user.
 *
 * Each incorrect guess reveals one additional body part
 *
 * @param {{ wrongGuesses: number }} props Component props.
 * @param {number} props.wrongGuesses The number of incorrect guesses.
 * @return {JSX.Element} The rendered hangman drawing component.
 */
export default function HangmanDrawing({ wrongGuesses }) {
  return (
    <div className="hangman">
      <div className="pole" />
      {parts.slice(0, wrongGuesses).map((part, idx) => (
        <div key={idx} className={`part ${part}`} />
      ))}
    </div>
  );
}
