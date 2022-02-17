import clsx from 'clsx';

type LetterGuessState = 'incorrect' | 'correct' | 'partially_correct';

const longDelays = [
  'animation-delay-none',
  'animation-delay-300',
  'animation-delay-600',
  'animation-delay-900',
  'animation-delay-1200',
];
const quickDelays = [
  'animation-delay-none',
  'animation-delay-100',
  'animation-delay-200',
  'animation-delay-300',
  'animation-delay-400',
];

type LetterTileProps = {
  letter?: string;
  letterIdx?: number;
  isSmall?: boolean;
  guessState?: LetterGuessState;
  isGuessed: boolean;
  isPartOfWinningWord?: boolean;
};

const LetterTile = ({
  letter,
  letterIdx = 0,
  isSmall = false,
  guessState = 'incorrect',
  isGuessed,
  isPartOfWinningWord = false,
}: LetterTileProps) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center border-2 border-[#878a8c] text-3xl font-bold uppercase dark:border-[#565758]',
        isSmall ? 'h-10 w-10' : 'h-14 w-14 tall:h-16 tall:w-16',
        !isGuessed
          ? letter
            ? 'animate-expand text-[#1a1a1b] dark:text-white'
            : 'border-2 border-[#d3d6da] dark:border-[#3a3a3c]'
          : isPartOfWinningWord
          ? 'text-white'
          : ['text-[#1a1a1b] dark:text-white', longDelays[letterIdx]],
        !isPartOfWinningWord &&
          isGuessed &&
          ((guessState === 'incorrect' && 'animate-flip-gray') ||
            (guessState === 'correct' && 'animate-flip-green') ||
            (guessState === 'partially_correct' && 'animate-flip-yellow')),
        isPartOfWinningWord && [
          'animate-bounce-once border-0 bg-[#6aaa64]',
          quickDelays[letterIdx],
        ]
      )}
    >
      {letter}
    </div>
  );
};

export default LetterTile;
