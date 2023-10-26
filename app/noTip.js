import React, { useMemo } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

import COLORS from '../style/colors';
import Left from '../svg/Left';

const NoTip = () => {
    const router = useRouter();

    const sentence = useMemo(() => {
        options = ['Really? I live on tips. Go back and try again.', "I'll just assume your finger slipped."];

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
                        fontSize: 40,
                        textAlign: 'center',
                        margin: 10,
                    }}
                >
                    {sentence}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 640,
                            height: 70,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
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
