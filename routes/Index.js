import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../views/common/Splash';
import SignupScreen from '../views/common/Signup';
import LoginScreen from '../views/common/Login';
import FarmerDashboardScreen from '../views/farmers/Dashboard';
import {Image} from 'react-native';
export default Route = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
            headerBackTitleVisible: false,
            headerTitle: () => ( // App Logo
            <Image
                style={{height:50,width:220}}
                  source={{ uri: 'https://res.cloudinary.com/dqrrkueir/image/upload/v1672940495/greenguru/image-removebg-preview_4_onlazf.png' }}
            />
          ),
          headerStyle: {
            backgroundColor: '#AFF3AA',
          },
          headerTitleStyle: { flex: 1, textAlign: 'center', alignSelf:'center' },
    
          }}>
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen name="Signup" component={SignupScreen}>
            </Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}>
            </Stack.Screen>
            <Stack.Screen name="FarmerDashboard" component={FarmerDashboardScreen}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}