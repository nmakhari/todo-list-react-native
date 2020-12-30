import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header.js';
import NewItem from './components/NewItem.js';
import ListItem from './components/ListItem.js'

var currentKeyMax = 1; // to generate unique keys within a reasonable list size

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (input) => {
    if (input.length > 0) {
      currentKeyMax++;

      setTasks([
        {text: input, key: currentKeyMax.toString()},
        ...tasks
      ]);
    } else {
      Alert.alert('Error!', 'Cannot create a blank task', [{text: 'OK', onPress: () => console.log('ok pressed')}]);
    }
  }

  const removeItem = (key) => {
    setTasks(tasks.filter((item) => item.key != key));
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>

        <Header/>

        <View style={styles.content}>
          <NewItem submitItem={addTask}/>

          <FlatList
            style={styles.list}
            data={tasks}
            renderItem={({item}) => (
              <ListItem task={item} completionHandler={removeItem} />
            )} />

        </View>

      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  content: {
    padding: 20,
    flex: 1,
  },
  list: {
    flex: 1,
  }
});