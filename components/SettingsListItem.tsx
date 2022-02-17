type SettingsListItemProps = {
  title: string;
  children: React.ReactNode;
};

const SettingsListItem = ({ title, children }: SettingsListItemProps) => {
  return (
    <div className='flex w-full justify-between border-b-2 py-4 dark:border-[#3a3a3c]'>
      <div className='text-lg dark:text-white'>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default SettingsListItem;
