
import React from 'react'
import { Text, View, StatusBar  } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor='#0EF7E2' barStyle='dark-content' />
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='home' component={Home}/>
          <Stack.Screen name='details' component={Details} />
        </Stack.Navigator>
    </NavigationContainer>

    </SafeAreaProvider>
  )
}

export default App