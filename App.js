import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Bank/Home';
import Next from './Bank/Next';
import Chart from './Bank/Chart';
import SignIn from './Bank/SignIn';
import Details from './Bank/Details';


export default function App() {
  const Stack = createNativeStackNavigator ();

  return (
 
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name = 'SignIn' component = {SignIn} options = {{headerShown: false}}/>
          <Stack.Screen name = 'Home' component = {Home} options = {{headerShown: false}}/>
          <Stack.Screen name = 'Next' component = {Next} options = {{headerShown: false}}/>
          <Stack.Screen name = 'Chart' component = {Chart} options = {{headerShown: false}}/>
          <Stack.Screen name = 'Details' component = {Details} options = {{headerShown: false}}/>
       </Stack.Navigator>
    </NavigationContainer>

  );
}