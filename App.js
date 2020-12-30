import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import NewItem from './components/NewItem.js'

export default function App() {

  const [tasks, setTasks] = useState([
    {text: 'test task', key: '1'}
  ]);

  var currentKeyMax = 1; // stores the largest key created so far

  const addTask = (input) => {

    setTasks([
      {text: input, key: currentKeyMax + 1},
      ...tasks
    ]);

    currentKeyMax++;
  }

  return (
    <View style={styles.container}>
      <Header/>

      <NewItem submitItem={addTask}/>
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