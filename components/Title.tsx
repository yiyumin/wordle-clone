type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className='text-4xl font-bold tracking-wider dark:text-white'>
      {title}
    </h1>
  );
};

export default Title;
