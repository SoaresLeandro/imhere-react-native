import { Button, StyleSheet, Text, View } from 'react-native';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Button title='Click-me'></Button>

      <Button title='Dont click-me'></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#140101',
      padding: 24
    },
    eventName:{
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    buttonOne: {
      backgroundColor: 'green'
    },
    buttonTwo:{
      backgroundColor: 'blue'
    }
});