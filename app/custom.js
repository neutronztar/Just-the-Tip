import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import COLORS from '../style/colors';
import Left from '../svg/Left';

const Custom = () => {
    const [tipAmount, setTipAmount] = useState(15);

    const router = useRouter();

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
                    Leave a custom tip
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Slider
                        style={{ width: 700, height: 40, paddingVertical: 80 }}
                        minimumValue={0}
                        maximumValue={100}
                        value={tipAmount}
                        minimumTrackTintColor={COLORS.button}
                        maximumTrackTintColor='#000000'
                        onValueChange={(val) => setTipAmount(val)}
                    />
                </View>
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
                            rounded = Math.round(tipAmount);
                            if (rounded == 0) {
                                router.push('/noTip');
                            } else {
                                router.push({ pathname: '/signature', params: { tipAmount: rounded } });
                            }
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
                            }}
                        >
                            Leave {Math.round(tipAmount)}% tip
                        </Text>
                    </TouchableOpacity>
                </View>
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

export default Custom;
