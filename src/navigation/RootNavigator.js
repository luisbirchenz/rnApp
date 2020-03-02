import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from '../navigation/DrawerNavigator';

const AuthNavigator = createSwitchNavigator(
  {
    AuthHomeNavigator: DrawerNavigator,
  },
  {
    initialRouteName: 'AuthHomeNavigator',
  }
);

const RootNavigator = createAppContainer(AuthNavigator);

export default RootNavigator;