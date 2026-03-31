/**
 * Renders the current word as an array of letter slots.
 *
 * Each slot displays the corresponding letter only if it has
 * been correctly guessed; otherwise, the slot is empty.
 *
 * @param {{ word: string, guessedLetters: string[] }} props Component props.
 * @param {string} props.word The target word to be guessed.
 * @param {string[]} props.guessedLetters Array of letters that have been guessed by the player.
 * @return {JSX.Element} The rendered word slots component.
 */

export default function WordSlots({ word, guessedLetters }) {
  return (
    <div className="word">
      {word.split("").map((letter, idx) => (
        <span key={idx} className="slot" >
            { guessedLetters.includes(letter) ? letter : '' }
        </span>
      ))}
    </div>
  );
}
