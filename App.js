import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header.js';
import NewItem from './components/NewItem.js';
import ListItem from './components/ListItem.js'

var currentKeyMax = 1;

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (input) => {

    currentKeyMax++;

    setTasks([
      {text: input, key: (currentKeyMax + 1).toString()},
      ...tasks
    ]);

    // currentKeyMax = currentKeyMax + 1;
  }

  const removeItem = (key) => {
    setTasks(tasks.filter((item) => item.key != key));
  }

  return (
    <View style={styles.container}>
      <Header/>

      <NewItem submitItem={addTask}/>
      <View>
        <FlatList
          style={styles.list}
          data={tasks}
          renderItem={({item}) => (
            <ListItem task={item} completionHandler={removeItem} />
          )} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  list: {
    padding: 15
  }
});