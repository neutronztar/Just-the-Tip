import React, { useMemo } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

import COLORS from '../style/colors';
import Left from '../svg/Left';

const NoTip = () => {
    const router = useRouter();

    const sentence = useMemo(() => {
        options = [
            "I'll just assume your finger slipped.",
            "You're a bad person.",
            "You won't get away with this 🫵🏼",
            "You should see the last person who didn't tip ☠️",
            '😡😡😡',
            'You better watch your back 😈',
            "I'm telling your mom you didn't leave a tip.",
            '🖕',
            '💩',
        ];

        return options[Math.floor(Math.random() * options.length)];
    });

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text
                    style={{
                        color: COLORS.text,
                        fontSize: 55,
                        textAlign: 'center',
                        margin: 15,
                    }}
                >
                    {sentence}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 960,
                            height: 110,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 15,
                        }}
                        onPress={() => {
                            router.back();
                        }}
                    >
                        <Left fill={COLORS.text} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default NoTip;
