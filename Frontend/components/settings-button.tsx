import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SettingsButton = ({ onPress }: { onPress: () => void }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

        useEffect(() => {
            Font.loadAsync({
            FredokaOne: require('../assets/fonts/FredokaOne.ttf'),
            }).then(() => setFontsLoaded(true));
        }, []);

        if (!fontsLoaded) {
            return null; // or a loading placeholder
        }

  return (
    <View style={styles.button}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <FontAwesome name="cog" size={72} color="#1B4332" />
        <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B7E4C7',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 167,

    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    color: '#1B4332',
    marginTop: 8,
    fontFamily: 'FredokaOne',

  },
});

export default SettingsButton;
