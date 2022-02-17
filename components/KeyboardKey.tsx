import clsx from 'clsx';
import { KeyState } from '../types';

type KeyboardKeyProps = {
  isLarge?: boolean;
  keyState?: KeyState;
  keyContent: React.ReactNode;
  onClick: () => void;
};

const KeyboardKey = ({
  isLarge = false,
  keyState = 'default',
  keyContent,
  onClick,
}: KeyboardKeyProps) => {
  return (
    <button
      className={clsx(
        'flex h-14 items-center justify-center rounded-md font-bold uppercase dark:text-white',
        isLarge ? 'w-14 text-xs' : 'w-9 text-base',
        keyState === 'default'
          ? 'bg-[#d3d6da] dark:bg-[#818384]'
          : 'text-white',
        (keyState === 'correct' && 'bg-[#6aaa64] dark:bg-[#538d4e]') ||
          (keyState === 'partially_correct' &&
            'bg-[#c9b458] dark:bg-[#b59f3b]') ||
          (keyState === 'incorrect' && 'bg-[#787c7e] dark:bg-[#3a3a3c]')
      )}
      onClick={onClick}
    >
      {keyContent}
    </button>
  );
};

export default KeyboardKey;
