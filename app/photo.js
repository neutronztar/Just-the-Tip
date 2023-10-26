import React, { useState, useRef, useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Audio } from 'expo-av';

import COLORS from '../style/colors';
import Left from '../svg/Left';
import JumpScare from '../images/JumpScare.jpg';

const Photo = () => {
    const router = useRouter();
    const [hasCameraPermissions, setHasCameraPermissions] = useState(null);
    const [image, setImage] = useState(null);
    const [countdown, setCountdown] = useState(null);
    const cameraRef = useRef(null);
    const [sound, setSound] = useState();

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermissions(cameraStatus === 'granted');
        })();
    }, []);

    useEffect(() => {
        return sound
            ? () => {
                  console.log('Unloading Sound');
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    const playScareSound = async () => {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../audio/JumpScare.mp3'));
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    };

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                await new Promise((r) => setTimeout(r, 1000));
                setImage(data.uri);
                saveImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const saveImage = async (uri) => {
        if (uri) {
            try {
                await MediaLibrary.createAssetAsync(uri);
            } catch (e) {
                console.log(e);
            }
        }
    };

    const startCountdown = async () => {
        setCountdown(3);
        await new Promise((r) => setTimeout(r, 1000));
        setCountdown(2);
        await new Promise((r) => setTimeout(r, 1000));
        setCountdown(1);
        await new Promise((r) => setTimeout(r, 1000));
        setCountdown(0);
        playScareSound();
        await new Promise((r) => setTimeout(r, 1000));
        takePicture();
        await new Promise((r) => setTimeout(r, 2000));
        setCountdown(null);
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.background }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1 }}>
                    {!image ? (
                        <Camera style={{ flex: 1, marginTop: 20 }} type={CameraType.front} ref={cameraRef}>
                            {countdown == 0 ? <Image source={JumpScare} style={{ width: '100%', height: '100%', opacity: 0.9 }} /> : <></>}
                        </Camera>
                    ) : (
                        <Image style={{ flex: 1, marginTop: 20 }} source={{ uri: image }} />
                    )}
                </View>

                {!image ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.button,
                                width: 400,
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

                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.button,
                                width: 400,
                                height: 70,
                                borderRadius: 9,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10,
                            }}
                            onPress={countdown == null ? startCountdown : () => {}}
                        >
                            <Text
                                style={{
                                    color: COLORS.text,
                                    fontSize: 32,
                                }}
                            >
                                {countdown == null ? 'Take Picture' : countdown}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.button,
                                width: 400,
                                height: 70,
                                borderRadius: 9,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10,
                            }}
                            onPress={() => router.push('/')}
                        >
                            <Text
                                style={{
                                    color: COLORS.text,
                                    fontSize: 32,
                                }}
                            >
                                Restart
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default Photo;
