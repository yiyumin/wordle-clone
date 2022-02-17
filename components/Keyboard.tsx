import { useEffect } from 'react';
import { BackspaceIcon } from '@heroicons/react/outline';

import KeyboardKey from './KeyboardKey';
import KeyboardLetterKeys from './KeyboardLetterKeys';
import KeyboardRowWrapper from './KeyboardRowWrapper';

type KeyboardProps = {
  incorrectLetters: string[];
  correctLetters: string[];
  partiallyCorrectLetters: string[];
  addLetterToGuess: (letter: string) => void;
  removeLetterFromGuess: () => void;
  submitGuess: () => void;
};

const Keyboard = ({
  incorrectLetters,
  correctLetters,
  partiallyCorrectLetters,
  addLetterToGuess,
  removeLetterFromGuess,
  submitGuess,
}: KeyboardProps) => {
  useEffect(() => {
    const onLetterKeyDown = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) {
        addLetterToGuess(e.key);
      }
    };

    document.addEventListener('keydown', onLetterKeyDown);
    return () => document.removeEventListener('keydown', onLetterKeyDown);
  }, [addLetterToGuess]);

  useEffect(() => {
    const onBackspaceKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        removeLetterFromGuess();
      }
    };

    document.addEventListener('keydown', onBackspaceKeyDown);
    return () => document.removeEventListener('keydown', onBackspaceKeyDown);
  }, [removeLetterFromGuess]);

  useEffect(() => {
    const onEnterKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        submitGuess();
      }
    };

    document.addEventListener('keydown', onEnterKeyDown);
    return () => document.removeEventListener('keydown', onEnterKeyDown);
  }, [submitGuess]);

  return (
    <div className='space-y-2 p-2'>
      <KeyboardRowWrapper>
        <KeyboardLetterKeys
          letters='qwertyuiop'
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          partiallyCorrectLetters={partiallyCorrectLetters}
          addLetterToGuess={addLetterToGuess}
        />
      </KeyboardRowWrapper>

      <KeyboardRowWrapper>
        <KeyboardLetterKeys
          letters='asdfghjkl'
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          partiallyCorrectLetters={partiallyCorrectLetters}
          addLetterToGuess={addLetterToGuess}
        />
      </KeyboardRowWrapper>

      <KeyboardRowWrapper>
        <KeyboardKey isLarge onClick={submitGuess} keyContent='enter' />

        <KeyboardLetterKeys
          letters='zxcvbnm'
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          partiallyCorrectLetters={partiallyCorrectLetters}
          addLetterToGuess={addLetterToGuess}
        />

        <KeyboardKey
          isLarge
          onClick={removeLetterFromGuess}
          keyContent={<BackspaceIcon className='h-6 w-6' />}
        />
      </KeyboardRowWrapper>
    </div>
  );
};

export default Keyboard;
