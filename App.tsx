import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import './gesture-handler'
import Profile from './components/Profile';
import Settings from './components/Settings';
import Home from './components/Home';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const MyDrawer: React.FC = () => (
  <Drawer.Navigator 
  screenOptions={{}}
  >
    <Drawer.Screen name="My profile" component={Profile} options={{ headerTitle: "My profile" }} />
    <Stack.Screen name="Settings" component={Settings} options={{ headerTitle: "Settings" }}/>
    
  </Drawer.Navigator>
);
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#3f569c'}
    />
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"profile"} screenOptions={{
        headerShown: false, // Hide headers globally for all screens in this navigator
      }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="profile" component={MyDrawer} options={{ headerTitle: "profile" }} />
      </Stack.Navigator>
    </NavigationContainer>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff"
},
});
