import clsx from 'clsx';

import { WORD_LENGTH } from '../config';
import { LetterGuessState } from '../types';

import LetterTile from './LetterTile';

type GameBoardWordProps = {
  gameWord: string;
  guess: string;
  isGuessed: boolean;
  isError: boolean;
  isWinningWord: boolean;
};

const GameBoardWord = ({
  gameWord,
  guess,
  isGuessed,
  isError,
  isWinningWord,
}: GameBoardWordProps) => {
  return (
    <div className={clsx('flex gap-1', isError && 'animate-shake')}>
      {Array.from(Array(WORD_LENGTH).keys()).map((idx) => {
        const letter = guess[idx];
        let guessState: LetterGuessState | undefined;
        if (letter === gameWord[idx]) {
          guessState = 'correct';
        } else if (gameWord.includes(letter)) {
          guessState = 'partially_correct';
        }

        return (
          <LetterTile
            key={idx}
            letter={letter}
            letterIdx={idx}
            guessState={guessState}
            isGuessed={isGuessed}
            isPartOfWinningWord={isWinningWord}
          />
        );
      })}
    </div>
  );
};

export default GameBoardWord;
