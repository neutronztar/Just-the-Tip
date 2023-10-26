import React, { useState, useRef } from 'react';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

import COLORS from '../../style/colors';
import Left from '../../svg/Left';

const Sign = () => {
    const ref = useRef();

    // Called after ref.current.readSignature() reads a non-empty base64 string
    const handleOK = (signature) => {
        console.log(signature);
        onOK(signature); // Callback from Component props
    };

    // Called after ref.current.readSignature() reads an empty string
    const handleEmpty = () => {
        console.log('Empty');
    };

    // Called after ref.current.clearSignature()
    const handleClear = () => {
        console.log('clear success!');
    };

    // Called after end of stroke
    const handleEnd = () => {
        ref.current.readSignature();
    };

    // Called after ref.current.getData()
    const handleData = (data) => {
        console.log(data);
    };

    const params = useLocalSearchParams();
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
                        marginTop: 50,
                    }}
                >
                    You are tipping {params.tipAmount}%.
                </Text>
                <Text
                    style={{
                        color: COLORS.text,
                        fontSize: 40,
                        textAlign: 'center',
                        margin: 10,
                    }}
                >
                    Signature Required
                </Text>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 50 }}>
                    <SignatureScreen
                        onOK={(img) => console.log(img)}
                        clearText='Clear'
                        confirmText='Confirm'
                        webStyle={`.m-signature-pad {
                            position: fixed;
                            margin:auto;
                            top: 0;
                            width:100%;
                            height:80%
                          }
                          body,html {
                            position:relative;
                          }`}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
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

export default Sign;
