import * as React from 'react';
import { View , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';





function SettingsScreen() {
  return (
    <View>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Ikhaya') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Sesha') {
          iconName = focused ? 'search' : 'search';
        } else if (route.name === 'Umtapo Wakho') {
          iconName = focused ? 'list' : 'list';
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      
      <Tab.Screen name="Ikhaya" component={SettingsScreen} />
      <Tab.Screen name="Sesha" component={SettingsScreen} />
      <Tab.Screen name="Umtapo Wakho" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
    
  }

});
