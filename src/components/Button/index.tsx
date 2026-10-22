
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string,
    //onPress?: () => void,
    //activeOpacity?: number,
}

export function Button({title, /*activeOpacity, onPress*/ ...rest}: Props) {
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
            //activeOpacity={activeOpacity}
            //onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}