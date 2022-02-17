import SettingsList from './SettingsList';
import SettingsListItem from './SettingsListItem';
import { useTheme } from '../contexts/ThemeProvider';
import SettingsSwitch from './SettingsSwitch';

const Settings = () => {
  const { isDarkModeEnabled, setIsDarkModeEnabled } = useTheme();
  return (
    <SettingsList>
      <SettingsListItem title='Dark Mode'>
        <SettingsSwitch
          isChecked={isDarkModeEnabled}
          srLabel='Toggle dark mode'
          onChange={setIsDarkModeEnabled}
        />
      </SettingsListItem>
    </SettingsList>
  );
};

export default Settings;
