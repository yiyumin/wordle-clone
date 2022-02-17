import clsx from 'clsx';

type GuessDistributionProps = {
  numGuess: number;
  guessCount: number;
  maxCount: number;
};

const GuessDistributionBar = ({
  numGuess,
  guessCount,
  maxCount,
}: GuessDistributionProps) => {
  return (
    <div className='flex items-center gap-1'>
      <div className='w-2 text-sm'>{numGuess}</div>
      <div
        className={clsx(
          'pr-2 text-right text-white',
          guessCount === maxCount
            ? 'bg-[#6aaa64]'
            : 'bg-[#787c7e] dark:bg-[#3a3a3c]'
        )}
        style={{ width: `${(guessCount / maxCount) * 94 + 6}%` }}
      >
        {guessCount}
      </div>
    </div>
  );
};

export default GuessDistributionBar;
