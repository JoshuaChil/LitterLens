import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
    

export default function BackButton({onPress}: {onPress: () => void}) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <FontAwesome name="arrow-left" size={24} color="#1B4332" />
        <Text style={styles.buttonText}>
          Go Back
        </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B7E4C7',
    borderRadius: 20,
    width: '40%',
    marginVertical: 10,
    padding: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#1B4332',
    fontFamily: 'FredokaOne',
    marginLeft: 10,
  },
});