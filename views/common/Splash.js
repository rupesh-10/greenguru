import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import React,{useEffect} from 'react'
import { auth } from '../../firebase';
import checkAuthenticated from '../../middlewares/checkAuthenticated';
export default function Splash({navigation}) {

    checkAuthenticated.isNotAuthenticated()
    checkAuthenticated.isAuthenticated()

    return (
      <View style={{
          // Try setting `flexDirection` to `"row"`.
          backgroundColor: '#AFF3AA',
          flex:1,
        }}>
          <View style={{flex:2,alignItems:'center',justifyContent:'flex-end',marginTop:'5%'}}>
            <TouchableOpacity>
                <Image
                source={{
                    uri: 'https://res.cloudinary.com/dqrrkueir/image/upload/v1672937321/greenguru/image-removebg-preview_3_psng2i.png',
                }}
                style={{width: 350, height: 300}}
                />
             </TouchableOpacity>
          </View>
          <View style={{flex:2, alignItems:'flex-end', justifyContent:'flex-end'}}>
          <Image
          source={{
            uri: 'https://res.cloudinary.com/dqrrkueir/image/upload/v1672723023/greenguru/Screenshot_at_Dec_30_10-25-39_PM-removebg-preview_1_aghau8.png',
          }}
          style={{
              width: '100%',
              height: 200,
              }}
        />
          </View>
        </View>
    );
  }
  
const styles = StyleSheet.create({
 
  });
  