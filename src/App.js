import { useEffect, useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import WordSlots from "./components/WordSlots";
import LetterInput from "./components/LetterInput";
import UsedLetters from "./components/UsedLetters";
import Popup from "./components/Popup";
import { getRandomWord } from "./data/words";
import "./App.css";

function App() {
  // Hangman setup
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("playing");
  const [showHelp, setShowHelp] = useState(false);
  const MAX_WRONG = 6;

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    setWord(getRandomWord());

    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus("playing");
  }

  function handleGuess(letter) {
    if (guessedLetters.includes(letter) || gameStatus !== "playing") return;

    setGuessedLetters((prev) => [...prev, letter]);

    if (!word.includes(letter)) setWrongGuesses((prev) => prev + 1);
  }

  useEffect(() => {
    if (word.length === 0) return;
    if (wrongGuesses >= MAX_WRONG) setGameStatus("lost");

    const won = word
      .split("")
      .every((letter) => guessedLetters.includes(letter));

    if (word.length >= 0 && won) setGameStatus("won");
  }, [guessedLetters, wrongGuesses, word]);

  return (
    <div className="app">
      <h1>Hangman</h1>

      <HangmanDrawing wrongGuesses={wrongGuesses} />

      <WordSlots word={word} guessedLetters={guessedLetters} />

      <LetterInput onGuess={handleGuess} disabled={gameStatus !== "playing"}/>

      <UsedLetters letters={guessedLetters} />

      <div className="buttons">
        <button onClick={resetGame} className="button secondary">Reset Game</button>
        <button onClick={() => setShowHelp(true)} className="button secondary">Help</button>
      </div>

      <Popup
        show={showHelp}
        title="How to Play"
        onClose={() => setShowHelp(false)}
      >
        <p>Guess the word one letter at a time.</p>
        <p>Each wrong guess draws part of the hangman.</p>
        <p>You lose after 6 wrong guesses.</p>
      </Popup>

      {/* Win/Lose popup */}
      <Popup
        show={gameStatus !== "playing"}
        title={gameStatus === "won" ? "You Win" : "Game Over"}
        onClose={resetGame}
      >
        <p>
          The word was: <strong>{word}</strong>
        </p>
      </Popup>
    </div>
  );
}

export default App;
