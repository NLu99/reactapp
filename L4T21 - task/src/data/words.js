/**
 * Array of words used for guessing.
 * @type {string[]}
 */

const words = [
  "biglez",
  "react",
  "javascript",
  "component",
  "state",
  "props",
  "hangman",
  "frontend",
  "developer",
  "function",
];

/**
 * 
 * @return {string} A randomly chosen worrd from predefined list.
 */
export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
