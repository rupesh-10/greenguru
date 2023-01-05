import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../views/common/Splash';
import Signup from '../views/common/Signup';
import {Image,View} from 'react-native';
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
          headerTitleStyle: { flex: 1, textAlign: 'center' },
      
          }}>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen name="Signup" component={Signup}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}