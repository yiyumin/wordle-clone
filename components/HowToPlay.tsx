import { toWords } from 'number-to-words';

import { NUM_GUESSES, WORD_LENGTH } from '../config';

import HowToPlayWord from './HowToPlayWord';

const HowToPlay = () => {
  return (
    <div className='flex flex-col gap-2 px-3 py-5 text-sm dark:text-white'>
      <div className='space-y-3 border-b-2 border-[#3a3a3c] p-2'>
        <p>
          Guess the <span className='font-bold'>WORDLE</span> in{' '}
          {toWords(NUM_GUESSES)} tries.
        </p>
        <p>
          Each guess must be a {toWords(WORD_LENGTH)}-letter word. Hit the enter
          button to submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
      </div>
      <div className='flex flex-col gap-4 border-b-2 border-[#3a3a3c] p-2'>
        <h3 className='font-bold'>Examples</h3>
        <HowToPlayWord guess='weary' letterIdx={0} letterState='correct' />
        <p>
          The letter <span className='font-bold'>W</span> is in the word and in
          the correct spot.
        </p>
        <HowToPlayWord
          guess='pills'
          letterIdx={1}
          letterState='partially_correct'
        />
        <p>
          The letter <span className='font-bold'>I</span> is in the word but in
          the wrong spot.
        </p>
        <HowToPlayWord guess='vague' letterIdx={3} letterState='incorrect' />
        <p>
          The letter <span className='font-bold'>U</span> is not on the word in
          any spot.
        </p>
      </div>
      <div className='p-2'>
        <p>
          *** Unlike the original, this clone version generates a new word each
          game and can be played more than once in a day. ***
        </p>
      </div>
    </div>
  );
};

export default HowToPlay;
