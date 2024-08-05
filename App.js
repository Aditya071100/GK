import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
// import Singlenews from './screens/Singlenewsws';
import Splash from './screens/Splash';
import Questions from './screens/Questions';
import English from './screens/English';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
    <Stack.Screen name="Questions" component={Questions} options={{headerShown:false}} />
    <Stack.Screen name="English" component={English} options={{headerShown:false}} />




  </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App