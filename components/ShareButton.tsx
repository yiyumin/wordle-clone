import { ShareIcon } from '@heroicons/react/outline';

type ShareButtonProps = {
  onClick: () => void;
};

const ShareButton = ({ onClick }: ShareButtonProps) => {
  return (
    <button
      className='flex items-center gap-3 rounded bg-[#6aaa64] px-10 py-3 text-xl font-extrabold uppercase text-white'
      onClick={onClick}
    >
      Share
      <ShareIcon className='h-6 w-6' />
    </button>
  );
};

export default ShareButton;
