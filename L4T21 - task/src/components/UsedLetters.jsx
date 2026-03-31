/**
 * Displays the list of letters that have already been guessed.
 *
 * Each letter is rendered once and visually separated
 *
 * @param {{ letters: string[] }} props Component props.
 * @param {string[]} props.letters Array of guessed letters.
 * @return {JSX.Element} The rendered list of used letters.
 */

export default function UsedLetters({ letters }) {
  return (
    <div>
      <h5>Used Letters</h5>
      <div className="used">
        {letters.map((letter) => (
          <span key={letter}>{letter}</span>
        ))}
      </div>
    </div>
  );
}
