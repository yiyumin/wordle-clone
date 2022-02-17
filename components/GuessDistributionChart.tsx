import GuessDistributionBar from './GuessDistributionBar';

type GuessDistributionChartProps = {
  guessCounts: number[];
};

const GuessDistributionChart = ({
  guessCounts,
}: GuessDistributionChartProps) => {
  const maxCount = Math.max(...guessCounts);

  return (
    <div className='w-5/6 space-y-1'>
      {guessCounts.map((guessCount, idx) => (
        <GuessDistributionBar
          key={idx}
          numGuess={idx + 1}
          guessCount={guessCount}
          maxCount={maxCount}
        />
      ))}
    </div>
  );
};

export default GuessDistributionChart;
