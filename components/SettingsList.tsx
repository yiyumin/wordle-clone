type SettingsListProps = {
  children: React.ReactNode;
};

const SettingsList = ({ children }: SettingsListProps) => {
  return <div className='mt-2 w-full py-3 px-5'>{children}</div>;
};

export default SettingsList;
