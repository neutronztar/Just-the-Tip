import React, { useState, useMemo } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import COLORS from '../style/colors';
import Left from '../svg/Left';
import Reaper from '../svg/Reaper';

const reaperThreshold = 20;

const Custom = () => {
    const [tipAmount, setTipAmount] = useState(18);
    const router = useRouter();

    const reaperOpacity = useMemo(() => {
        if (tipAmount >= reaperThreshold) {
            return 0;
        } else {
            return (reaperThreshold - tipAmount) / reaperThreshold;
        }
    }, [tipAmount]);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background, position: 'relative' }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <Reaper position='absolute' opacity={reaperOpacity} />
            <View style={{ flex: 1, justifyContent: 'center', zIndex: 1 }}>
                <Text
                    style={{
                        color: COLORS.text,
                        fontSize: 55,
                        textAlign: 'center',
                        margin: 15,
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
                            width: 960,
                            height: 110,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 15,
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
                                fontSize: 55,
                            }}
                        >
                            Leave {Math.round(tipAmount)}% tip{Math.round(tipAmount) == 69 ? ' (nice)' : ''}
                        </Text>
                    </TouchableOpacity>
                </View>
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

export default Custom;
