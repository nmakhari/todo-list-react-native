import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js';

export default function App() {

  const [tasks, setTasks] = useState([
    {text: 'test task', key: '1'}
  ]);

  return (
    <View style={styles.container}>
      <Header/>
      <View> 
        {/* input here */}
      </View>

      <View>
        {/* list here */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});