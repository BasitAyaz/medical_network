import Icon from 'react-native-vector-icons/MaterialIcons';


export default function BAIcon(props: { name: string, size?: number, color?: string }) {
    const { name, size, color } = props
    return <>
        <Icon name={name} size={size ?? 20} color={color ?? "black"} />
    </>
}