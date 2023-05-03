import {View, Text,StyleSheet,TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';
import commonStyles from '../../assets/styles/common'
import React,{useState,useEffect} from 'react'
import * as SecureStore from 'expo-secure-store';
import * as Device from "expo-device";
import checkAuthenticated from '../../middlewares/checkAuthenticated';

import { auth } from '../../firebase';
import MyModal from "../components/MyModal";
import services from '../../api/services';

export default Login = ({route,navigation})=>{
    checkAuthenticated.isAuthenticated()
    const {afterSignup,userName} = route.params || false
    const showModal = afterSignup==true ? true : false
    const [email,setEmail] = useState('')
    const [signedUpUser,setSignedUpUser] = useState(userName || '')
    const [modalVisible, setModalVisible] = useState(showModal);
    const [password,setPassword] = useState('')
    const [isProcessing,setIsProcessing] = useState(false)
    const [errorMessage, setErrorMessage] = useState({
		email: "",
		password: "",
	});

    const handleLogin = () => {
        setIsProcessing(true)
        services
        .login({
            email,
            password,
            deviceName: Device.deviceName,
        })
        .then(async (res) => {
            const { data } = res;

            if (data.status) {
                await SecureStore.setItemAsync('auth_token',data.token);
                navigation.replace('FarmerDashboard')
            } else {
                console.log(data);
                setErrorMessage({
                    email:data.messages.email ? data.messages.email[0] : "",
                    password:data.messages.password ? data.messages.password[0] : "",
                });
            }
        })
        .catch((err) => {
            console.log(err);
        }).finally(()=>{
            setIsProcessing(false)
        })
    }

    const navigateToSignup = ()=>{
        navigation.navigate('Signup')
    }

    return (
        <View style={commonStyles.greenView}>
             {isProcessing && <ActivityIndicator size="large" style={{alignSelf:'center',height:'100%',position:'absolute'}} />}
            <Text style={commonStyles.header2}>Login</Text>
            <View style={{paddingTop:20}}>
                <View style={{paddingTop:20}}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        placeholder="Email"
                        autoCapitalize='none'
                        onChangeText = {text=>{setEmail(text)}}
                    />
                    {errorMessage.email && (
						<Text style={styles.errorMessage}>{errorMessage.email}</Text>
					)}
                </View>

                <View style={{paddingTop:20}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        autoCapitalize='none'
                        onChangeText = {text=>{setPassword(text)}}
                        secureTextEntry
                    />
                    {errorMessage.password && (
						<Text style={styles.errorMessage}>{errorMessage.password}</Text>
					)}
                </View>

                <Text style={styles.forgotPassword}>
                    Forgot Password ?
                </Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={ handleLogin }
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <Text style={[styles.forgotPassword,{alignSelf:'center',marginTop:30}]}>
                   New to GreenGuru ? <TouchableOpacity onPress={navigateToSignup}><Text style={{fontSize:22,fontWeight:'700',textAlign:'center'}}>Register Here</Text></TouchableOpacity>
                </Text>
            </View>
            <MyModal
				text={`Hello ${signedUpUser}, Welcome to our system, Please login to continue...`}
				image="https://res.cloudinary.com/dqrrkueir/image/upload/v1675677500/greenguru/12981478_5105270_ar7fkb.jpg"
				modalVisible={modalVisible}
                closeButtonText="Thank you"
				onRequestClose={() => {
					setModalVisible(false);
				}}
			></MyModal>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
      height: 67,
      borderWidth: 2,
      borderRadius:15,
      borderColor:'#2D2D2D',
      padding:10,
      fontSize:24,
      color:'#295A54',
    },
    loginButton:{
        height: 64,
        backgroundColor:'#004B03',
        borderRadius:30,
        marginTop:20,
        borderWidth: 1,
        borderColor: '#004B03',
        display:'flex',
        justifyContent:'center',
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          fontSize:20,
          lineHeight:23,
          fontWeight:'400',
      },
      forgotPassword:{
        alignSelf:'flex-end',
        lineHeight:26,
        fontWeight:'500',
        color:'#2D2D2D',
        fontSize:22, 
        marginTop:10
      },
      errorMessage: {
		fontSize: 20,
		color: "#DC143C",
		marginTop: 10,
		fontWeight: "600",
		marginLeft: 10,
	},
  });