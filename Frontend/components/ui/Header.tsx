import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';

export default function Header() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        Font.loadAsync({
        FredokaOne: require('../../assets/fonts/FredokaOne.ttf'),
        }).then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) {
        return null; // or a loading placeholder
    }
    return (
        <View style={styles.headerContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>LitterLens</Text>
                <Text style={styles.text2}>Lightweight, mobile client app for federated learning with waste management in computer vision!</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingBottom: 20,
        marginRight: 5,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    text1: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontFamily: 'FredokaOne',
        textAlign: 'left',
    },
    text2: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 5,
        fontFamily: 'FredokaOne',
        textAlign: 'left',
    },
});