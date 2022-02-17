import { gameWords, validWords } from '../data';

const getRandomWord = () => {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
};

const isValidWord = (word: string) => {
  return gameWords.includes(word) || validWords.includes(word);
};

export { getRandomWord, isValidWord };
