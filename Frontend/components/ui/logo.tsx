
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';



export default function Logo() {

    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 16000, // 32 seconds per rotation
            easing: Easing.linear,
            useNativeDriver: true,
        })
        ).start();
    }, []);

    const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.logoContainer}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 162,
        height: 162,    
    },
});
