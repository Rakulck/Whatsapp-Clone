import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import ChatListItem from './src/components/ChatListItem';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    paddingVertical:36
  },
});
