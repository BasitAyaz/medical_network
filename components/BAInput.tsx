import { Text, TextInput, View } from "react-native";
import rncStyles from 'rncstyles'

export default function BAInput(props: any) {
    const { label, onChangeText, placeholder, disabled } = props
    return <>
        <View
            style={rncStyles.pb1}>
            <Text
                style={[
                    rncStyles.textPrimary,
                    rncStyles.p1
                ]}
            >{label}</Text>
            <TextInput
                onChangeText={onChangeText}
                editable={!disabled}
                style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary
                ]}
                placeholder={placeholder}
            />
        </View>
    </>
}