import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements';

import Finding from '../views/finding-view';

import config from '../config/stack';

const TodoListDrawerItem = createStackNavigator({
  Pricing: {
    screen: Finding,
    navigationOptions: ({ navigation }) => ({
      title: 'TodoList User',
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

TodoListDrawerItem.navigationOptions = {
  drawerLabel: 'TodoList2 user',
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

export default TodoListDrawerItem;
