import {
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';

import HeaderItem from './HeaderItem';
import Title from './Title';

type HeaderProps = {
  openHowToPlay: () => void;
  openStatistics: () => void;
  openSettings: () => void;
};

const Header = ({
  openSettings,
  openStatistics,
  openHowToPlay,
}: HeaderProps) => {
  return (
    <header className='relative flex items-center justify-center border-b-2 border-[#d3d6da] p-2 dark:border-[#3a3a3c]'>
      <div className='absolute left-2'>
        <HeaderItem Icon={QuestionMarkCircleIcon} onClick={openHowToPlay} />
      </div>

      <Title title='WORDLE' />

      <div className='absolute right-2 flex gap-2'>
        <HeaderItem Icon={ChartBarIcon} onClick={openStatistics} />
        <HeaderItem Icon={CogIcon} onClick={openSettings} />
      </div>
    </header>
  );
};

export default Header;
