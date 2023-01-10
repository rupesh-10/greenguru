import {View, Text,StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';
import commonStyles from '../../assets/styles/common'
import {
    Roboto_400Regular,
} from "@expo-google-fonts/dev";
export default Signup = ({navigation})=>{
    return (
        <View style={commonStyles.greyView}>
            <View style={styles.welcomeCard}>
                <Text style={[commonStyles.header3,commonStyles.whiteText, commonStyles.selfCenter]}>Good Evening</Text>
                <Text style={[commonStyles.header4, commonStyles.whiteText, commonStyles.selfCenter]}>Ruby Rose</Text>
                <Text style={[commonStyles.header5, commonStyles.whiteText, commonStyles.selfCenter]}>19°C</Text>
            </View>
            <View style={{margin:8}}>
             <View>
                <Text style={[commonStyles.header4,{margin:'2%'}]}>Weather Report</Text>
                <View style={[styles.weatherCard,{ flexDirection: "row",marginTop:8,}]}>
                    <View style={{flext:1}}>
                    <Text style={[commonStyles.paragraph1,]}>Hetauda, 1 Jan</Text>
                    <Text style={[commonStyles.paragraph1]}>19° C</Text>
                    <Text style={[commonStyles.paragraph3,commonStyles.mutedText,{marginTop:8}]}>Sunset  6:00 PM</Text>
                    <Text style={commonStyles.paragraph3}>Rain expected at 7:00 PM</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                        <Image source={{uri:'https://res.cloudinary.com/dqrrkueir/image/upload/v1673359840/greenguru/image-removebg-preview_5_2_bkwsnt.png'}}   style={{
                            alignSelf:'center',
                            height:89,
                            width:118
                            }}>

                         </Image>
                    </View>
                </View>
             </View>
             <View style={{marginTop:10, margin:'2%'}}>
                <Text style={commonStyles.header4}>Services</Text>
                <View style={[{ flexDirection: "row",justifyContent:'space-between',marginTop:15}]}>
                    <View style={[styles.serviceCard,{flext:1}]}>
                        <Image source={{uri:"https://res.cloudinary.com/dqrrkueir/image/upload/v1673361867/greenguru/pngwing_8_ufujs0.png"}}
                        style={{
                            width:52,
                            height:75,
                            alignSelf:'center'
                        }}
                        ></Image>
                            <Text style={[commonStyles.paragraph2,{alignSelf:'center'}]}>My Plants</Text>
                    </View>
                    <View style={[styles.serviceCard,{flext:1}]}>
                        <Image source={{uri:"https://res.cloudinary.com/dqrrkueir/image/upload/v1673361866/greenguru/pngwing_5_wzeohh.png"}}
                        style={{
                            width:39,
                            height:75,
                            alignSelf:'center'
                        }}
                        ></Image>
                            <Text style={[commonStyles.paragraph2,{alignSelf:'center'}]}>Community</Text>
                    </View>
                </View>
                <View style={[{ flexDirection: "row",justifyContent:'space-between',marginTop:15}]}>
                    <View style={[styles.serviceCard,{flext:1}]}>
                        <Image source={{uri:"https://res.cloudinary.com/dqrrkueir/image/upload/v1673361867/greenguru/pngwing_8_ufujs0.png"}}
                        style={{
                            width:52,
                            height:75,
                            alignSelf:'center'
                        }}
                        ></Image>
                            <Text style={[commonStyles.paragraph2,{alignSelf:'center'}]}>My Plants</Text>
                    </View>
                    <View style={[styles.serviceCard,{flext:1}]}>
                        <Image source={{uri:"https://res.cloudinary.com/dqrrkueir/image/upload/v1673361866/greenguru/pngwing_5_wzeohh.png"}}
                        style={{
                            width:39,
                            height:75,
                            alignSelf:'center'
                        }}
                        ></Image>
                            <Text style={[commonStyles.paragraph2,{alignSelf:'center'}]}>Community</Text>
                    </View>
                </View>
             </View>


             <View>
                <Text style={[commonStyles.header4,{margin:'2%'}]}>Trending News</Text>
                <View style={[styles.newsCard,{ flexDirection: "row",marginTop:8,}]}>
                    <View style={{flext:1,maxWidth:'70%'}}>
                    <Text style={[commonStyles.paragraph4]}>https://businessnews.com</Text>
                    <Text style={[commonStyles.paragraph2,]}>Latest news on manufacturing sector - Magnil Technology</Text>
                    <Text style={[commonStyles.paragraph3,commonStyles.mutedText,{marginTop:7}]}>13 hours ago</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>
                        <Image source={{uri:'https://res.cloudinary.com/dqrrkueir/image/upload/v1673363611/greenguru/image_2_dpmhmc.png'}}   style={{
                            alignSelf:'center',
                            height:69,
                            width:72
                            }}>

                         </Image>
                    </View>
                </View>
             </View>
             
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    welcomeCard:{
        width:'96%',
        alignSelf:'center', 
        margin:8, 
        padding:8,
        backgroundColor:'#004B03',
        borderRadius:13,
        borderColor:'#004B03'
    },

    weatherCard:{
        width:'96%',
        alignSelf:'center', 
        padding:18,
        backgroundColor:'#FFFFFF',
        borderRadius:14,
        borderColor:'#EAE0E0'
    },

   newsCard:{
        width:'96%',
        alignSelf:'center', 
        padding:16,
        backgroundColor:'#FFFFFF',
        borderRadius:14,
        borderColor:'#EAE0E0'
    },

    serviceCard:{
        width:180,
        height:110,
        backgroundColor:'#FFFFFF',
        borderColor:'#EAE0E0',
        borderRadius:14
    }
  });