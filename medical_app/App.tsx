import Home from './components/home';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './components/About';
import Login from './components/Login';
import Nav from './components/nav';
interface Info {
  count: number;
  url: string;
  id: number;
  prise: number;
}
interface CardCountState {
  [key: number]: Info;
}
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  About: {addCard: CardCountState};
};
const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <Nav/>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{title: 'Login'}}
    //     />
    //     <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    //     <Stack.Screen
    //       name="About"
    //       component={About}
    //       options={{title: 'About'}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <SafeAreaView>
    //   <ScrollView>
    //     <Home />
    //   </ScrollView>
    // </SafeAreaView>
  );
}

export default App;
