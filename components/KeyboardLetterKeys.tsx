import { KeyState } from '../types';
import KeyboardKey from './KeyboardKey';

type KeyboardLetterKeysProps = {
  letters: string;
  incorrectLetters: string[];
  correctLetters: string[];
  partiallyCorrectLetters: string[];
  addLetterToGuess: (letter: string) => void;
};

const KeyboardLetterKeys = ({
  letters,
  incorrectLetters,
  correctLetters,
  partiallyCorrectLetters,
  addLetterToGuess,
}: KeyboardLetterKeysProps) => {
  return (
    <>
      {letters.split('').map((char, idx) => {
        let keyState: KeyState | undefined;

        if (incorrectLetters.includes(char)) {
          keyState = 'incorrect';
        } else if (correctLetters.includes(char)) {
          keyState = 'correct';
        } else if (partiallyCorrectLetters.includes(char)) {
          keyState = 'partially_correct';
        }

        return (
          <KeyboardKey
            key={idx}
            keyState={keyState}
            onClick={() => addLetterToGuess(char)}
            keyContent={char}
          />
        );
      })}
    </>
  );
};

export default KeyboardLetterKeys;
