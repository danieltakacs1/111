import { StyleSheet, Text, View } from "react-native-web"


export default function CreateScreen() {
    return (
        <View style={styles.container}>
            <Text>Új jármű</Text>
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