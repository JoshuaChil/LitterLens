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
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Centralized Learning Settings:</Text>
      <View style={styles.iconRow}>
        <FontAwesome name="mobile" size={72} color="#1B4332" />
        <FontAwesome name="arrow-right" size={42} color="#1B4332" />
        <FontAwesome name="image" size={52} color="#1B4332" />
        <FontAwesome name="arrow-right" size={42} color="#1B4332" />
        <FontAwesome name="server" size={52} color="#1B4332" />
        {/* Add more icons here if needed */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B7E4C7',
    borderRadius: 20,
    padding: 16,
    width: '95%',
    height: 167,
    marginVertical: 20,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
    color: '#1B4332',
    fontFamily: 'FredokaOne',
    marginBottom: 12,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default SettingsButton;
