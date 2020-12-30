import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default header = () => {
    
    return (
        <View style={style.header}>
            <Text style={style.headerText}>Todo List</Text>
        </View>
    );

}

const style = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 40,
        padding: 20,
        fontFamily: 'Roboto', // necessary for one plus and other OS which cannot handle the bold text correctly
        color: 'white'
    }
});