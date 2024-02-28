import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Járművek" component={ReadScreen} />
        <Tab.Screen name="Új" component={CreateScreen} />
        <Tab.Screen name="Módosít" component={UpdateScreen} />
        <Tab.Screen name="Töröl" component={DeleteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}