import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import SettingsButton from '../components/settings-button'; // Adjust the path as necessary
import Buttons from '../components/ui/Buttons'; // Adjust the path as necessary
import Header from '../components/ui/Header'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 
import BackButton from '../components/ui/BackButton'; // Adjust the path as necessary

export default function CorrectionScreen() {
  
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToHome = () => {
    navigation.navigate("Home");
  };


  return (
    <LinearGradient
      colors={['#52B788', '#49A47A', '#3B8765', '#2D6A4F']}  // your 3 colors here
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
    <View style={styles.container}>
      <BackButton onPress={goToHome} />
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  background: {
    flex: 1, 
  },
  header: {
    width: '100%',
  },
  line: {
    width: '95%',
    height: 4,
    backgroundColor: '#FFFFFF',
    marginVertical: 0,
    borderRadius: 2,
    
  }
});