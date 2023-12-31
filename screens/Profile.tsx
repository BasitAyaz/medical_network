
import { View, TextInput, TouchableOpacity, Text, ScrollView, Image } from 'react-native'
import rncStyles from 'rncstyles'

export default function Profile() {
    return <>
        <View
            style={[
                rncStyles.h100,
                rncStyles.bgWhite
            ]}>
            <View
                style={[
                    rncStyles.h100,
                    rncStyles.justifyContentCenter
                ]}>
                <ScrollView>
                    <View
                        style={[
                            rncStyles.p2,
                            rncStyles.py5
                        ]}
                    >
                        <View
                            style={rncStyles.flexCenter}>
                            <Image
                                resizeMode='contain'
                                style={[
                                    rncStyles.roundedPill,
                                    { width: 140, height: 140 }
                                ]}
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU'
                                }}
                            />
                        </View>
                        <View
                            style={rncStyles.flexCenter}
                        >
                            <Text
                                style={[
                                    rncStyles.fs1,
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.mb1
                                ]}
                            >Muhammad Zaid</Text>
                            <Text
                                style={[
                                    rncStyles.fs5,
                                    rncStyles.textSecondary,
                                ]}
                            >@Muhammad_zaid</Text>
                            <TouchableOpacity
                                style={[
                                    rncStyles.btnPrimary,
                                    rncStyles.mt1
                                ]}
                            >
                                <Text
                                    style={rncStyles.textWhite}
                                >Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={rncStyles.p2}
                    >
                        <View
                            style={[
                                rncStyles.rounded,
                                rncStyles.shadow5,
                                rncStyles.bgWhite,
                                rncStyles.p1,
                                rncStyles.flexRow
                            ]}
                        >
                            <View
                                style={[
                                    rncStyles.flex1,
                                    rncStyles.p1
                                ]}
                            >
                                <Text
                                    style={[
                                        rncStyles.textPrimary,
                                        rncStyles.textBold,
                                        rncStyles.fs4,
                                        rncStyles.textCenter
                                    ]}
                                >145</Text>
                                <Text
                                    style={[
                                        rncStyles.textSecondary,
                                        rncStyles.textBold,
                                        rncStyles.textCenter
                                    ]}
                                >Designs</Text>
                            </View>
                            <View
                                style={[
                                    rncStyles.flex1,
                                    rncStyles.p1
                                ]}
                            >
                                <Text
                                    style={[
                                        rncStyles.textPrimary,
                                        rncStyles.textBold,
                                        rncStyles.fs4,
                                        rncStyles.textCenter
                                    ]}
                                >32</Text>
                                <Text
                                    style={[
                                        rncStyles.textSecondary,
                                        rncStyles.textBold,
                                        rncStyles.textCenter
                                    ]}
                                >Following</Text>
                            </View>
                            <View
                                style={[
                                    rncStyles.flex1,
                                    rncStyles.p1
                                ]}
                            >
                                <Text
                                    style={[
                                        rncStyles.textPrimary,
                                        rncStyles.textBold,
                                        rncStyles.fs4,
                                        rncStyles.textCenter
                                    ]}
                                >414k</Text>
                                <Text
                                    style={[
                                        rncStyles.textSecondary,
                                        rncStyles.textBold,
                                        rncStyles.textCenter
                                    ]}
                                >Followers</Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={rncStyles.p2}
                    >
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2,
                                rncStyles.borderBottom1,
                                rncStyles.borderLight
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Full Name</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >Muhammad Zaid</Text>
                        </View>
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2,
                                rncStyles.borderBottom1,
                                rncStyles.borderLight
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Email</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >muhammadzaid@gmail.com</Text>
                        </View>
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2,
                                rncStyles.borderBottom1,
                                rncStyles.borderLight
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Gender</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >Male</Text>
                        </View>
                        <View
                            style={[
                                rncStyles.p1,
                                rncStyles.mb2
                            ]}
                        >
                            <Text
                                style={[
                                    rncStyles.textSecondary,
                                    rncStyles.textBold,
                                ]}
                            >Contact</Text>
                            <Text
                                style={[
                                    rncStyles.textPrimary,
                                    rncStyles.textBold,
                                    rncStyles.fs3,
                                ]}
                            >+92 312 3456789</Text>
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
                                >Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        </View>
    </>
}

