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
                        fontSize: 40,
                        textAlign: 'center',
                        margin: 10,
                    }}
                >
                    Add a tip?
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 200,
                            height: 150,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                        }}
                        onPress={() => {
                            router.push('/signature/10');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
                            }}
                        >
                            10%
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 200,
                            height: 150,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                        }}
                        onPress={() => {
                            router.push('/signature/15');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
                            }}
                        >
                            15%
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 200,
                            height: 150,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                        }}
                        onPress={() => {
                            router.push('/signature/20');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
                            }}
                        >
                            20%
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
                            router.push('/custom');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
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
                            width: 640,
                            height: 70,
                            borderRadius: 9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10,
                        }}
                        onPress={() => {
                            router.push('/noTip');
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.text,
                                fontSize: 32,
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
