type StatisticsComponentProps = {
  children: React.ReactNode;
  title?: string;
};

const StatisticsComponent = ({ children, title }: StatisticsComponentProps) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      {title && <h3 className='font-bold uppercase'>{title}</h3>}
      {children}
    </div>
  );
};

export default StatisticsComponent;
