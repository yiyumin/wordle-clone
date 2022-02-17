import { useEffect } from 'react';
import { ToastContainer, cssTransition } from 'react-toastify';

import { useTheme } from '../contexts/ThemeProvider';

import 'react-toastify/dist/ReactToastify.minimal.css';

const SlideInOut = cssTransition({
  enter: 'animate-slide-in-bck-bottom',
  exit: 'animate-slide-out-bck-top',
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { isDarkModeEnabled } = useTheme();
  useEffect(() => {
    document.body.classList.remove(isDarkModeEnabled ? 'light' : 'dark');
    document.body.classList.add(isDarkModeEnabled ? 'dark' : 'light');
  }, [isDarkModeEnabled]);

  return (
    <div className='flex h-screen w-screen justify-center dark:bg-[#121213]'>
      {children}
      <ToastContainer
        autoClose={1000}
        closeButton={false}
        transition={SlideInOut}
        className='fixed left-1/2 top-[15%] flex -translate-x-1/2 flex-col gap-5'
        toastClassName='p-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg'
      />
    </div>
  );
};

export default Layout;
