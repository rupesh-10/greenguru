import {View, Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {
    Roboto_400Regular,
} from "@expo-google-fonts/dev";
export default Signup = ({navigation})=>{
    return (
        <View style={{padding:15,backgroundColor:"#AFF3AA",height:'100%'}}>
            <Text style={{fontSize:36,fontFamily:'Roboto_400Regular',fontWeight:'500'}}>Signup</Text>
            <View style={{paddingTop:20}}>
                <View style={{paddingTop:20}}>
                    <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                />
                </View>

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

                <View style={{paddingTop:20}}>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                    />
                </View>
                <Text style={{alignSelf:'flex-end',lineHeight:26,fontWeight:'500',color:'#2D2D2D',fontSize:22, marginTop:10}}>
                     Already have an account ? 
                </Text>
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('Splash')}
                    underlayColor='#fff'>
                    <Text style={styles.signupText}>Sign Up</Text>
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
    signupButton:{
        height: 64,
        backgroundColor:'#004B03',
        borderRadius:30,
        marginTop:20,
        borderWidth: 1,
        borderColor: '#004B03',
        display:'flex',
        justifyContent:'center',
      },
      signupText:{
          color:'#fff',
          textAlign:'center',
          fontSize:20,
          lineHeight:23,
          fontWeight:'400',
          fontFamily:'Roboto_400Regular'
      }
  });