type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

type HeaderItemProps = {
  Icon: HeroIcon;
  onClick: () => void;
};

const HeaderItem = ({ Icon, onClick }: HeaderItemProps) => {
  return (
    <button onClick={onClick}>
      <Icon className='h-6 w-6 stroke-[#878a8c]' />
    </button>
  );
};

export default HeaderItem;
