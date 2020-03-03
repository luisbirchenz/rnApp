import React from 'react';
import { View, Image, Dimensions, SafeAreaView } from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigatorItems,
} from 'react-navigation-drawer';

//import HomeNavigator from '../../navigation/HomeNavigator';
import Users from '../drawer/users';
import TodoList from '../drawer/todolist';
import FontsDrawerItem from '../drawer/groups';

const WINDOW_WIDTH = Dimensions.get('window').width;

const customContentComponent = props => (
  <SafeAreaView
    style={{ flex: 1, height: '100%', backgroundColor: '#43484d' }}
    forceInset={{ top: 'always', horizontal: 'never' }}
  >
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../images/logo.png')}
        style={{ width: '70%' }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerNavigatorItems {...props} />
    </View>
  </SafeAreaView>
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      path: '/home',
      screen: Users,
    },
    Lists: {
      path: '/groups',
      screen: FontsDrawerItem,
    },
    TodoList: {
      path:'/todolist',
      screen: TodoList,
    },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      backgroundColor: '#43484d',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: Math.min(WINDOW_WIDTH * 0.8, 300),
    contentComponent: customContentComponent,
  }
);

export default DrawerNavigator;
