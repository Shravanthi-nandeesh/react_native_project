import { SafeAreaView, StyleSheet, Text, View,StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import './gesture-handler'
import Profile from './components/Profile';
import Settings from './components/Settings';
import Home from './components/Home';
import CustomDrawer from './components/CustomDrawer';
import Login from './components/AccountStatus/Login';
import SignUp from './components/AccountStatus/SignUp';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const MyDrawer: React.FC = () => (
  <Drawer.Navigator 
  drawerContent={props=><CustomDrawer {...props}/>}
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
      <Stack.Navigator initialRouteName={"Login"} screenOptions={{
        headerShown: false, // Hide headers globally for all screens in this navigator
      }}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={Login} options={{headerTitle:''}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerTitle:''}}/>
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
