import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LogButton = ({ onPress }: { onPress: () => void }) => {
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
    <View style={{paddingHorizontal: 25}}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FontAwesome name="trash" size={72} color="#1B4332" />
      <Text style={styles.text}>Waste Log</Text>
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
    width: 153,
    height: 156,
  },
  text: {
    fontSize: 25,
    color: '#1B4332',
    marginTop: 8,
    fontFamily: 'FredokaOne',
  },
});

export default LogButton;
