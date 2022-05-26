import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Login from '../screens/Login.js';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../screens/SignIn.js';
import LoginWithEmail from '../screens/LoginwithEmail.js';
import CardList from '../screens/CardList.js';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUpWithEmail"
          component={LoginWithEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={CardList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
