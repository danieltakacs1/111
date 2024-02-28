import { StyleSheet, Text, View } from "react-native-web"


export default function UpdateScreen() {
    return (
        <View style={styles.container}>
            <Text>Jármű módosítása</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    },
});