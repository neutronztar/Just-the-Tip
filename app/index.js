import { View, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import COLORS from '../style/colors';

const Home = () => {
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
                        fontSize: 55,
                        textAlign: 'center',
                        margin: 15,
                    }}
                >
                    Add a tip?
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 300,
                            height: 225,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 15,
                        }}
                        onPress={() => {
                            router.push({ pathname: '/signature', params: { tipAmount: 10 } });
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 55,
                            }}
                        >
                            10%
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 300,
                            height: 225,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 15,
                        }}
                        onPress={() => {
                            router.push({ pathname: '/signature', params: { tipAmount: 20 } });
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 55,
                            }}
                        >
                            20%
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 300,
                            height: 225,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 15,
                        }}
                        onPress={() => {
                            router.push({ pathname: '/signature', params: { tipAmount: 30 } });
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 55,
                            }}
                        >
                            30%
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
                            router.push('/custom');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 55,
                            }}
                        >
                            Custom
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
                            router.push('/noTip');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 55,
                            }}
                        >
                            No tip
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Home;
