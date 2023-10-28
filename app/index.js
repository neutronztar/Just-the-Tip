import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import COLORS from '../style/colors';
import SimpleCard from '../svg/SimpleCard';

const CARD_SLIDE_DISTANCE = 150;

const Home = () => {
    const router = useRouter();

    const [slideAnimation] = useState(new Animated.Value(0)); // Initial value for sliding: can be 0 or any other value as needed

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(slideAnimation, {
                    toValue: -CARD_SLIDE_DISTANCE, // sliding up
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnimation, {
                    toValue: 0, // sliding down
                    duration: 400,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background }}>
            <TouchableOpacity
                style={{ flex: 1, backgroundColor: COLORS.background, justifyContent: 'center', flexDirection: 'row' }}
                onPress={() => {
                    router.push('/tipPrompt');
                }}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                />
                <View style={{ flex: 1 }}></View>
                <View
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.text,
                            fontSize: 100,
                            textAlign: 'center',
                            margin: 15,
                        }}
                    >
                        Please pay here
                    </Text>
                    <Text
                        style={{
                            color: COLORS.text,
                            fontSize: 30,
                            textAlign: 'center',
                            margin: 15,
                        }}
                    >
                        We accept card, cash, Apple Pay, or human souls.
                    </Text>
                </View>
                <Animated.View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        flex: 1,
                        transform: [{ translateY: slideAnimation }],
                    }}
                >
                    <SimpleCard transform={[{ translateY: CARD_SLIDE_DISTANCE / 2 }]} fill={COLORS.button} />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
