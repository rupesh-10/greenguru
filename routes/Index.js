import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../views/common/Splash';
import SignupScreen from '../views/common/Signup';
import LoginScreen from '../views/common/Login';
import DetectorScreen from '../views/farmers/Detector';
import FarmerDashboardScreen from '../views/farmers/Dashboard';
import ShopScreen from '../views/farmers/Shop';
import ShopDetailsScreen from '../views/farmers/ShopDetails';
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
            <Stack.Screen name="FarmerDashboard" options={{headerLeft:null}} component={FarmerDashboardScreen}>
            </Stack.Screen>
            <Stack.Screen name="Detector" component={DetectorScreen}>
            </Stack.Screen>
            <Stack.Screen name="Shop" component={ShopScreen}>
            </Stack.Screen>
            <Stack.Screen name="ShopDetails" component={ShopDetailsScreen}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}