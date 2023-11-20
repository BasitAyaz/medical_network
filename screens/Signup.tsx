import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
import rncStyles from 'rncstyles'
import { signupUser } from '../config/firebasemethods';



export default function SignUp({ navigation }: any) {
    const [model, setModel] = useState<any>({})

    const signup = () => {
        signupUser(model).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }

    const fillModel = (key: string, val: any) => {
        model[key] = val
        setModel({ ...model })
    }

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
                    >Sign Up</Text>
                    <Text
                        style={[
                            rncStyles.fs5,
                            rncStyles.textSecondary
                        ]}
                    >Please Enter Your Information and create Acount.</Text>
                </View>
                <ScrollView>
                    <View>
                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Full Name</Text>
                            <TextInput
                                style={[
                                    rncStyles.input,
                                    rncStyles.bgWhite,
                                    rncStyles.rounded,
                                    rncStyles.border1,
                                    rncStyles.borderPrimary
                                ]}
                                placeholder='eg. Muhammad Zaid'
                            />
                        </View>
                        <View
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Email</Text>
                            <TextInput
                                keyboardType='email-address'
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
                                secureTextEntry={true}
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
                            style={rncStyles.pb1}>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.p1
                                ]}
                            >Retype Password</Text>
                            <TextInput
                                secureTextEntry={true}
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
                            style={rncStyles.py2}
                        >
                            <TouchableOpacity
                                onPress={signup}
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
                                >Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
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
                    >Have an Account?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text
                            style={[
                                rncStyles.textBold,
                                rncStyles.fs5,
                                rncStyles.ms1,
                                rncStyles.textPrimary
                            ]}
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}

