import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const host = "http://localhost:8000/"
  const endpoint = "jarmuvek"
  const url = host + endpoint

  const [jarmuvek, setJarmuvek] = useState([]);

  function getCars() {
    fetch(url)
    .then(response => response.json())
    .then(result => {      
      console.log(result)
      setJarmuvek(result)
    })
  }

  function addCar() {
    console.log("Hozzáadás")
    let jarmu = {
      rendszam: "DDD-888",
      urtartalom: 1600,
      ar: 122
    }
    fetch(url, {
      method: "post",
      body: JSON.stringify(jarmu),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))

  }
  return (
    <View style={styles.container}>
      <Text>Járművek</Text>

      <Pressable onPress={addCar}>
        <Text>Új jármű</Text>
      </Pressable>      

      <Pressable onPress={getCars}>
        <Text>Lekér</Text>
      </Pressable>

      <FlatList 
        data={jarmuvek}
        renderItem={({item}) => (
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
