import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import GitHub from '../views/github-view';

import config from '../config/stack';

const GitHubDrawerItem = createStackNavigator({
  Pricing: {
    screen: GitHub,
    navigationOptions: ({ navigation }) => ({
      title: 'Github',
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          type="entypo"
          iconStyle={{ paddingLeft: 10 }}
          onPress={navigation.toggleDrawer}
        />
      ),
    }),
  },
}, config);

GitHubDrawerItem.navigationOptions = {
  drawerLabel: 'GitHub',
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="attach-money"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="material"
      color={tintColor}
    />
  ),
};

export default GitHubDrawerItem;
