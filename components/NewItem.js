import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default itemForm = ({submitItem}) => {
    
    const [text, setText] = useState('');

    const updateHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.newTodo}
                placeholder={'New Todo'}
                onChangeText={updateHandler} />

            <Button
                color={'blue'}
                title={'Add Item'}
                onPress={() => submitItem(text)} />
        </View>
    ); 

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    },
    newTodo: {
        paddingBottom: 15,
        marginBottom: 5,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    }
});