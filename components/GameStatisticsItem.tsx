type GameStatisticsItemProps = {
  value: number;
  title: string;
};

const GameStatisticsItem = ({ value, title }: GameStatisticsItemProps) => {
  return (
    <div className='flex w-14 flex-col items-center'>
      <div className='text-3xl'>{value}</div>
      <div className='text-center text-xs'>{title}</div>
    </div>
  );
};

export default GameStatisticsItem;
