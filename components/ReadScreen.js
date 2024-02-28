import { Pressable } from "react-native";
import { FlatList, StyleSheet, Text, View } from "react-native-web"


export default function ReadScreen() {

    function getCars() {
        fetch(url)
        .then(response => response.json())
        .then(result => {      
          console.log(result)
          setJarmuvek(result)
        })
      }

    return (
        <View style={styles.container}>
            <Text>Járművek listája</Text>
            <Pressable onPress={getCars}>
                <Text>Lekér</Text>
            </Pressable>
            <FlatList data={jarmuvek}
            rednerItem={({item}) => (
                <View>
                    <Text>{item.rendszam} {item.ar} ETC</Text>
                </View>
            )}
            />
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