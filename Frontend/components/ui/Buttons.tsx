import React from 'react';
import { StyleSheet, View } from 'react-native';
import LogButton from '../log-button';
import PhotoButton from '../photo-button';


type ButtonsProps = {
  onPressLitterScan: () => void;
  onPressLog: () => void;
  onPressSettings: () => void;
};

const Buttons = ({ onPressLitterScan, onPressLog, onPressSettings }: ButtonsProps) => {
    return (
        <View style={styles.buttonsContainer}>
            <PhotoButton onPress={onPressLitterScan} />
            <LogButton onPress={onPressLog}  />
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