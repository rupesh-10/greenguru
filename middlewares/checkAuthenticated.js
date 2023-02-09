import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";

const isAuthenticated = async () => {
    const navigation = useNavigation();
    const token = await SecureStore.getItemAsync('auth_token');
    if(token){
        navigation.replace('FarmerDashboard')
    }
}

const isNotAuthenticated = async() => {
    const navigation = useNavigation();
    const token = await SecureStore.getItemAsync('auth_token');
    if(!token){
        navigation.replace('Login')
    }
}

export default {isAuthenticated,isNotAuthenticated}