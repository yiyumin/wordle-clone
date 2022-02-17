import GameBoardWord from './GameBoardWord';

type GameBoardProps = {
  gameWord: string;
  guesses: string[];
  numGuesses: number;
  isGuessError: boolean;
  isGameWon: boolean;
};

const GameBoard = ({
  gameWord,
  guesses,
  numGuesses,
  isGuessError,
  isGameWon,
}: GameBoardProps) => {
  return (
    <div className='flex basis-full flex-col items-center justify-center gap-1'>
      {guesses.map((guess, idx) => (
        <GameBoardWord
          key={idx}
          gameWord={gameWord}
          guess={guess}
          isGuessed={idx < numGuesses}
          isError={idx === numGuesses && isGuessError}
          isWinningWord={isGameWon && idx === numGuesses - 1}
        />
      ))}
    </div>
  );
};

export default GameBoard;
