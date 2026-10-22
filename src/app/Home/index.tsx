

import { View, Image } from "react-native";
import { Button } from "@/components/Button";
import { styles } from "./styles";

export function HomeErrada() {
    return (
            <View style={styles.container}>
                <Image
                    source={require("@/assets/logo.png")}
                    //style={styles.logo}
                />
    
                <Button title="Adicionar"
                    activeOpacity={0.2}
                    onPress={() => console.log("Adicionar")}
                />
    
                <Button title="Adicionar"
                    activeOpacity={0.5}
                    onPress={() => console.log("Remover")}
                />
    
            </View>
        );
}
