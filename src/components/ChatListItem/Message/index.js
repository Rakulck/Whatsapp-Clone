import { View, Text,StyleSheet } from "react-native";

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const Message = ({ message }) => {

  const isMymessage=()=>{
    return message.user.id=='u1';
  }

  return (
    <View 
    style={[styles.container,
    {backgroundColor:isMymessage() ? '#DCF8C5':"white",
      alignSelf:isMymessage() ?'flex-end':'flex-start'
    }
    ]}>
      <Text style={styles.message}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

export default Message;
const styles = StyleSheet.create({
    container: {
      margin: 5,
      padding: 10,
      borderRadius: 10,
      maxWidth: "80%",
  
          //Shadows
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
  
      elevation: 1,
    },
    message: {},
    time: {
      alignSelf: "flex-end",
      color: "grey",
    },
  });