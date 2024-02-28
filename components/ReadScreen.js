import { StyleSheet, Text, View } from "react-native-web"


export default function App() {
    return (
        <View style={styles.container}>
            <Text>Járművek listája</Text>
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