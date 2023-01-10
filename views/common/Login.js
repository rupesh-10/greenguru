import {View, Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import commonStyles from '../../assets/styles/common'
import {
    Roboto_400Regular,
} from "@expo-google-fonts/dev";
export default Login = ({navigation})=>{
    return (
        <View style={commonStyles.greenView}>
            <Text style={commonStyles.header2}>Login</Text>
            <View style={{paddingTop:20}}>
                <View style={{paddingTop:20}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                    />
                </View>

                <View style={{paddingTop:20}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                    />
                </View>

                <Text style={styles.forgotPassword}>
                    Forgot Password ?
                </Text>
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('FarmerDashboard')}
                    underlayColor='#fff'>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
            </View>
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
      fontFamily:'Roboto_400Regular'
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
          fontFamily:'Roboto_400Regular'
      },
      forgotPassword:{
        alignSelf:'flex-end',
        lineHeight:26,
        fontWeight:'500',
        color:'#2D2D2D',
        fontSize:22, 
        marginTop:10
      }
  });