import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';

export default function Home(){
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native...</Text>
    </View>
  )
}