import GameStatistics from './GameStatistics';
import GuessDistributionChart from './GuessDistributionChart';
import ShareButton from './ShareButton';
import StatisticsComponent from './StatisticsComponent';

type StatisticsProps = {
  numGamesPlayed: number;
  numGamesWon: number;
  currentWinStreak: number;
  maxWinStreak: number;
  guessCounts: number[];
  shareResults?: () => void;
};

const Statistics = ({
  numGamesPlayed,
  numGamesWon,
  currentWinStreak,
  maxWinStreak,
  guessCounts,
  shareResults,
}: StatisticsProps) => {
  return (
    <div className='flex w-full flex-col gap-5 py-10 dark:text-white'>
      <StatisticsComponent title='Statistics'>
        <GameStatistics
          numGamesPlayed={numGamesPlayed}
          numGamesWon={numGamesWon}
          currentWinStreak={currentWinStreak}
          maxWinStreak={maxWinStreak}
        />
      </StatisticsComponent>

      <StatisticsComponent title='Guess Distribution'>
        {numGamesPlayed === 0 ? (
          'No Data'
        ) : (
          <GuessDistributionChart guessCounts={guessCounts} />
        )}
      </StatisticsComponent>

      {shareResults && (
        <StatisticsComponent>
          <ShareButton onClick={shareResults} />
        </StatisticsComponent>
      )}
    </div>
  );
};

export default Statistics;
