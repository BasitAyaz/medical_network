
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import rncStyles from 'rncstyles'

export default function Login({ navigation }: any) {
    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.p2,
                    rncStyles.justifyContentCenter
                ]}>
                <View
                    style={rncStyles.py5}>
                    <Text
                        style={[
                            rncStyles.fs1,
                            rncStyles.textPrimary,
                            rncStyles.textBold,
                            rncStyles.mb1
                        ]}
                    >Login</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Sign in to continue.</Text>
                </View>
                <View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Email</Text>
                        <TextInput
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='example@abc.com'
                        />
                    </View>
                    <View
                        style={rncStyles.pb1}>
                        <Text
                            style={[
                                rncStyles.textPrimary,
                                rncStyles.p1
                            ]}
                        >Password</Text>
                        <TextInput
                            style={[
                                rncStyles.input,
                                rncStyles.bgWhite,
                                rncStyles.rounded,
                                rncStyles.border1,
                                rncStyles.borderPrimary
                            ]}
                            placeholder='Enter Password atleast 6 characters'
                        />
                    </View>
                    <View
                        style={rncStyles.py1}
                    >
                        <TouchableOpacity>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs5,
                                    rncStyles.textEnd
                                ]}
                            >Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={rncStyles.py2}
                    >
                        <TouchableOpacity
                            style={[
                                rncStyles.btnPrimary,
                                rncStyles.rounded
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textWhite,
                                    rncStyles.textCenter
                                ]}
                            >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={[
                        rncStyles.py2,
                        rncStyles.flexRow,
                        rncStyles.justifyContentCenter
                    ]}
                >
                    <Text
                        style={[
                            rncStyles.textBold,
                            rncStyles.textSecondary,
                            rncStyles.fs5
                        ]}
                    >Not Registerar yet?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('SignUp')
                    }}>
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

