import { StyleSheet, Text, View } from "react-native-web"


export default function DeleteScreen() {
    return (
        <View style={styles.container}>
            <Text>Járművek törlése</Text>
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