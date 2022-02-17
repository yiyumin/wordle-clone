import GameStatisticsItem from './GameStatisticsItem';

type GameStatisticsProps = {
  numGamesPlayed: number;
  numGamesWon: number;
  currentWinStreak: number;
  maxWinStreak: number;
};

const GameStatistics = ({
  numGamesPlayed,
  numGamesWon,
  currentWinStreak,
  maxWinStreak,
}: GameStatisticsProps) => {
  return (
    <div className='flex'>
      <GameStatisticsItem value={numGamesPlayed} title='Played' />
      <GameStatisticsItem
        value={Math.round((numGamesWon / numGamesPlayed) * 100) || 0}
        title='Win %'
      />
      <GameStatisticsItem value={currentWinStreak} title='Current Streak' />
      <GameStatisticsItem value={maxWinStreak} title='Max Streak' />
    </div>
  );
};

export default GameStatistics;
