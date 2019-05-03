import React from 'react';
import {View,Text,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
 const Header = ()=>{
    return(
        <View style={styles.header}>
            <Text>Todo List</Text>
        </View>
    );
};

const styles = {
    header: {
        flex: 1,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
};

export {Header};