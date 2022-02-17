import { NUM_GUESSES } from '../config';

const getGuessResultText = (gameWord: string, guess: string) => {
  let guessResultText = '';

  guess.split('').forEach((letter, idx) => {
    if (letter === gameWord[idx]) {
      guessResultText += '🟩';
    } else if (gameWord.includes(letter)) {
      guessResultText += '🟨';
    } else {
      guessResultText += '⬛';
    }
  });

  return guessResultText;
};

const getResultText = (gameWord: string, guesses: string[]) => {
  const numGuessSolvedIn =
    guesses.length === NUM_GUESSES && guesses[NUM_GUESSES - 1] !== gameWord
      ? 'X'
      : guesses.length;
  let resultText = `Wordle - Clone ${numGuessSolvedIn}/${NUM_GUESSES}\n`;

  guesses.forEach((guess) => {
    resultText += `\n${getGuessResultText(gameWord, guess)}`;
  });

  return resultText;
};

export { getResultText };
