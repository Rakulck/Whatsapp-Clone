import { View, Text } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ChatsScreen from '../screens/ChatsScreen'
import ChatScreen from '../screens/ChatScreen'
import MainTabNavigator from './MainTabNavigator'

const Stack =createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name='Chats' component={ChatsScreen}/>
        <Stack.Screen name='Chat' component={ChatScreen}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Navigator