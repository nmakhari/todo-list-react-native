import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default ListItem = ({task, completionHandler}) => {
    return (
        <TouchableOpacity
            onPress={() => completionHandler(task.key)}>
            <View style={styles.listItem}>
                <Text style={styles.itemText}>{task.text}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderStyle: 'dashed',
        borderColor: 'grey',
        borderWidth: 1,
        textAlign: 'center',
        padding: 15,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10
    },
    itemText: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});