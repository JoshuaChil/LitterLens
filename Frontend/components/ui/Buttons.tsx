import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogButton from '../log-button';
import PhotoButton from '../photo-button';

const Buttons = () => {
    return (
        <View style={styles.buttonsContainer}>
            <PhotoButton onPress={() => console.log('Photo button pressed')} />
            <LogButton onPress={() => console.log('Log button pressed')}  />
        </View>
    )
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
    }
});

export default Buttons;