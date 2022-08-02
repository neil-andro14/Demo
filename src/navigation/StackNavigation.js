import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CompanyCodeScreen from '../screens/CompanyCode';
import HomeScreen from '../screens/HomeScreen';
import ContentDetails from '../screens/ContentDetails';
import LoginScreen from '../screens/Login/LoginScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CompanyCode"
        component={CompanyCodeScreen}
        options={{title: 'Company Code Screen'}}
      />

      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ContentDetails" component={ContentDetails} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
