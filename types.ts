type LetterGuessState = 'incorrect' | 'correct' | 'partially_correct';

type KeyState = 'default' | LetterGuessState;

export type { LetterGuessState, KeyState };
