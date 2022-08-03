import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import CompanyCode from '../screens/CompanyCode';
import LoginScreen from '../screens/Login/LoginScreen';
import CustomDrawerHeader from './CustomDrawerHeader';
import SettingScreen from '../screens/Setting/SettingScreen';
import PaginationScreen from '../screens/Pagination/PaginationScreen';
import CalendarsView from '../screens/Calender/CalendarsView';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerHeader {...props} />}
      initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Company Code"
        component={CompanyCode}></Drawer.Screen>
      <Drawer.Screen name="Login" component={LoginScreen}></Drawer.Screen>
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
        }}></Drawer.Screen>
      <Drawer.Screen
        name="Pagination"
        component={PaginationScreen}></Drawer.Screen>
      <Drawer.Screen name="Calendar" component={CalendarsView}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
