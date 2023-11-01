import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

import COLORS from '../style/colors';
import Left from '../svg/Left';

const Sign = () => {
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
                        fontSize: 55,
                        textAlign: 'center',
                        margin: 10,
                        marginTop: 90,
                    }}
                >
                    {params.tipAmount == 100 ? '❤️ ' : ''}
                    You are tipping {params.tipAmount}%.{params.tipAmount == 69 ? '.. You dirty dog' : ''}
                    {params.tipAmount == 100 ? ' ❤️' : ''}
                </Text>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 50 }}>
                    <SignatureScreen
                        onOK={(img) => router.push({ pathname: '/photo', params: { signatureImg: img, tipAmount: params.tipAmount } })}
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
                        minWidth='6'
                        maxWidth='10'
                        penColor='red'
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'left', marginBottom: 50 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.button,
                            width: 200,
                            height: 100,
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

export default Sign;
