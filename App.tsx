import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import './gesture-handler'
import Profile from './components/Profile';
import Settings from './components/Settings';
import Home from './components/Home';
import CustomDrawer from './components/CustomDrawer';
import Login from './components/AccountStatus/Login';
import SignUp from './components/AccountStatus/SignUp';
import { auth } from './hooks/firebaseAuth';
import HomeScreen from './components/ProjectScreens/HomeScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
interface TaskProps {
  navigation: any
}

/***
 * Function for profil drawer.
 * @component CustomDrawer will handles the profile view of the drawer to make custom edits.
 */
const MyDrawer: React.FC = () => (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{}}
  >
   <Drawer.Screen name="projects home" component={HomeScreen} options={({ navigation }) => ({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require("./assets/profile_icon.png")} style={styles.profileImg} />
        </TouchableOpacity>
      ),
      headerTitle: ''
    })} />
    <Drawer.Screen name="My profile" component={Profile} options={{ headerTitle: "My profile" }} />
    <Stack.Screen name="Settings" component={Settings} options={{ headerTitle: "Settings" }} />
  </Drawer.Navigator>
);


/***
 * Function for Projects screen drawer
 * @component
 */


export default function App() {
  

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#3f569c'}
      />

      <NavigationContainer>
        <Stack.Navigator initialRouteName={auth.currentUser?.uid ? "projects home" : "Login"} screenOptions={{
          headerShown: false, // Hide headers globally for all screens in this navigator
        }}>
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Login" component={Login} options={{ headerTitle: '' }} /> */}
          <Stack.Screen name="profile" component={MyDrawer} options={{ headerTitle: "profile" }} />
          {/* <Stack.Screen name='SignUp' component={SignUp} options={{ headerTitle: '' }} /> */}
          {/* <Stack.Screen name ="ProjectHome" component={HomeScreen} options={{ headerTitle: '' }} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#8d70ee0d"
  },
  profileImg:{
    width:40,
    height:40,
    marginRight:10,
    marginTop:10
  }
});
