import { LetterGuessState } from '../types';
import LetterTile from './LetterTile';

type HowToPlayWordProps = {
  guess: string;
  letterIdx: number;
  letterState: LetterGuessState;
};

const HowToPlayWord = ({
  guess,
  letterIdx,
  letterState,
}: HowToPlayWordProps) => {
  return (
    <div className='flex gap-1'>
      {guess.split('').map((letter, idx) => {
        let guessState: LetterGuessState | undefined;
        if (idx === letterIdx) {
          guessState = letterState;
        }

        return (
          <LetterTile
            key={idx}
            letter={letter}
            isSmall
            guessState={guessState}
            isGuessed={idx === letterIdx}
          />
        );
      })}
    </div>
  );
};

export default HowToPlayWord;
