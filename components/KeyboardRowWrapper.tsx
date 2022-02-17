type KeyboardRowWrapperProps = {
  children: React.ReactNode;
};

const KeyboardRowWrapper = ({ children }: KeyboardRowWrapperProps) => {
  return <div className='flex justify-center gap-1'>{children}</div>;
};

export default KeyboardRowWrapper;
