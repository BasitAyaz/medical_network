import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import rncStyles from 'rncstyles'

export default function BAButton(props: any) {
    const { label, onPress, onLongPress } = props
    return <>
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
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
            >{label}</Text>
        </TouchableOpacity>
    </>
}