import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './components/Pages/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from './components/Pages/RegisterPage';
import HomePage from './components/Pages/HomePage';
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <>
     
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={LoginPage} />
        <Stack.Screen  options={{ headerShown: false }} name="Register" component={RegisterPage} />
        <Stack.Screen  options={{ headerShown: false }}  name="Home" component={HomePage} />
        </Stack.Navigator>

     </NavigationContainer>
    </>

  );
}


