import type { NextPage } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { NUM_GUESSES, WORD_LENGTH } from '../config';
import { getRandomWord, isValidWord } from '../lib/words';
import { getResultText } from '../lib/result-text';

import ModalFullPage from '../components/ModalFullPage';
import GameBoard from '../components/GameBoard';
import Header from '../components/Header';
import HowToPlay from '../components/HowToPlay';
import Keyboard from '../components/Keyboard';
import Settings from '../components/Settings';
import useLocalStorage from '../hooks/useLocalStorage';
import ModalFloat from '../components/ModalFloat';
import Statistics from '../components/Statistics';

type GameState = 'game_in_progress' | 'game_won' | 'game_over';

const Home: NextPage = () => {
  const [gameStats, setGameStats] = useLocalStorage('game-stats', () => {
    return {
      numGamesPlayed: 0,
      numGamesWon: 0,
      currentWinStreak: 0,
      maxWinStreak: 0,
      guessCounts: Array(NUM_GUESSES).fill(0),
    };
  });

  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [gameWord, setGameWord] = useState('');
  const [guesses, setGuesses] = useState<string[]>(() =>
    Array(NUM_GUESSES).fill('')
  );

  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [partiallyCorrectLetters, setPartiallyCorrectLetters] = useState<
    string[]
  >([]);

  const [numGuesses, setNumGuesses] = useState(0);
  const [isGuessError, setIsGuessError] = useState(false);
  const [isKeyboardLocked, setIsKeyboardLocked] = useState(false);
  const [gameState, setGameState] = useState<GameState>('game_in_progress');

  useEffect(() => {
    setGameWord(getRandomWord());
  }, []);

  useEffect(() => {
    setIsTutorialOpen(gameStats.numGamesPlayed === 0);
  }, [gameStats.numGamesPlayed]);

  useEffect(() => {
    if (gameState === 'game_in_progress') return;

    if (gameState === 'game_won') {
      setGameStats((prevStats) => ({
        ...prevStats,
        numGamesPlayed: prevStats.numGamesPlayed + 1,
        numGamesWon: prevStats.numGamesWon + 1,
        currentWinStreak: prevStats.currentWinStreak + 1,
        maxWinStreak: Math.max(
          prevStats.maxWinStreak,
          prevStats.currentWinStreak + 1
        ),
        guessCounts: prevStats.guessCounts.map((count, numGuess) =>
          numGuess === numGuesses ? count + 1 : count
        ),
      }));
    } else {
      setGameStats((prevStats) => ({
        ...prevStats,
        numGamesPlayed: prevStats.numGamesPlayed + 1,
        currentWinStreak: 0,
      }));
    }

    const timeoutId = setTimeout(() => {
      setIsStatisticsOpen(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [gameState, numGuesses, setGameStats]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsGuessError(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [isGuessError]);

  useEffect(() => {
    if (!isKeyboardLocked) return;

    const timeoutId = setTimeout(() => {
      setIsKeyboardLocked(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [isKeyboardLocked]);

  const addLetterToGuess = useCallback(
    (letter: string) => {
      if (
        letter.length > 1 ||
        gameState !== 'game_in_progress' ||
        isKeyboardLocked
      )
        return;

      setGuesses((prevGuesses) =>
        prevGuesses.map((guess, idx) =>
          numGuesses !== idx || guess.length >= WORD_LENGTH
            ? guess
            : guess + letter
        )
      );
    },
    [gameState, numGuesses, isKeyboardLocked]
  );

  const removeLetterFromGuess = useCallback(() => {
    setGuesses((prevGuesses) =>
      prevGuesses.map((guess, idx) =>
        numGuesses !== idx ? guess : guess.slice(0, -1)
      )
    );
  }, [numGuesses]);

  const submitGuess = useCallback(() => {
    if (gameState !== 'game_in_progress' || isKeyboardLocked) return;

    if (
      numGuesses >= guesses.length ||
      guesses[numGuesses].length < WORD_LENGTH
    ) {
      setIsGuessError(true);
      toast('Not enough letters');
    } else if (!isValidWord(guesses[numGuesses])) {
      setIsGuessError(true);
      toast('Not in word list');
    } else {
      const guessedWord = guesses[numGuesses];
      setNumGuesses((prevNumGuesses) => prevNumGuesses + 1);
      setIsKeyboardLocked(true);

      const timeoutId = setTimeout(() => {
        guessedWord.split('').forEach((letter, idx) => {
          if (letter === gameWord[idx]) {
            setCorrectLetters((prev) => [...prev, letter]);
          } else if (gameWord.includes(letter)) {
            setPartiallyCorrectLetters((prev) => [...prev, letter]);
          } else {
            setIncorrectLetters((prev) => [...prev, letter]);
          }
        });

        if (guessedWord === gameWord) {
          setGameState('game_won');
          toast(
            [
              'Genius',
              'Magnificent',
              'Impressive',
              'Splendid',
              'Great',
              'Phew',
            ][numGuesses]
          );
        } else if (numGuesses >= NUM_GUESSES - 1) {
          setGameState('game_over');
          toast('Better luck next time');
        }
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [gameState, gameWord, guesses, numGuesses, isKeyboardLocked]);

  const shareResults = useCallback(() => {
    const resultText = getResultText(
      gameWord,
      guesses.filter((guess) => guess)
    );

    if (navigator['canShare']) {
      navigator.share({ text: resultText });
    } else {
      navigator.clipboard.writeText(resultText).then(() => {
        toast('Copied results to clipboard');
      });
    }
  }, [gameWord, guesses]);

  return (
    <>
      <div className='flex w-full max-w-lg flex-col justify-between'>
        <Head>
          <title>Wordle - Clone</title>
          <meta name='description' content='Wordle clone site for practice.' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header
          openHowToPlay={() => setIsHowToPlayOpen(true)}
          openStatistics={() => setIsStatisticsOpen(true)}
          openSettings={() => setIsSettingsOpen(true)}
        />

        <GameBoard
          gameWord={gameWord}
          guesses={guesses}
          numGuesses={numGuesses}
          isGuessError={isGuessError}
          isGameWon={gameState === 'game_won'}
        />

        <Keyboard
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
          partiallyCorrectLetters={partiallyCorrectLetters}
          addLetterToGuess={addLetterToGuess}
          removeLetterFromGuess={removeLetterFromGuess}
          submitGuess={submitGuess}
        />
      </div>

      <ModalFloat
        isOpen={isTutorialOpen}
        closeModal={() => setIsTutorialOpen(false)}
      >
        <HowToPlay />
      </ModalFloat>

      <ModalFloat
        isOpen={isStatisticsOpen}
        closeModal={() => setIsStatisticsOpen(false)}
      >
        <Statistics
          numGamesPlayed={gameStats.numGamesPlayed}
          numGamesWon={gameStats.numGamesWon}
          currentWinStreak={gameStats.currentWinStreak}
          maxWinStreak={gameStats.maxWinStreak}
          guessCounts={gameStats.guessCounts}
          shareResults={
            gameState !== 'game_in_progress' ? shareResults : undefined
          }
        />
      </ModalFloat>

      <ModalFullPage
        title='Settings'
        isOpen={isSettingsOpen}
        closeModal={() => setIsSettingsOpen(false)}
      >
        <Settings />
      </ModalFullPage>

      <ModalFullPage
        title='How to Play'
        isOpen={isHowToPlayOpen}
        closeModal={() => setIsHowToPlayOpen(false)}
      >
        <HowToPlay />
      </ModalFullPage>
    </>
  );
};

export default Home;
