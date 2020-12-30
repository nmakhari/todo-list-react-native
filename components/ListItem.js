import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default ListItem = ({task, completionHandler}) => {
    return (
        <TouchableOpacity
            onPress={() => completionHandler(task.key)}>
            <View style={styles.listItem}>
                <MaterialIcons name="delete" size={24} color="black" style={styles.icon}/>
                <Text style={styles.itemText}>{task.text}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
        flex: 5,
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    icon: {
        flex: 1,
    }
});