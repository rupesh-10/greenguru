import React from 'react'
import {View, ScrollView, Text,StyleSheet,TextInput, TouchableOpacity,Image} from 'react-native';
import commonStyles from '../../assets/styles/common'

export default ServicesCard = (props) => {
    return (
    <TouchableOpacity onPress={props.onPressed}>
    <View style={[styles.serviceCard,{flext:1,height:props.height || 110, width:props.width || 180}]}>
        <Image source={{uri:props.image}}
        style={{
            width:props.imgWidth || 52,
            height:props.imgHeight || 75,
            alignSelf:'center'
        }}
        ></Image>
            <Text style={[commonStyles.paragraph2,{alignSelf:'center'}]}>{props.title}</Text>
    </View>
    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    serviceCard:{
        backgroundColor:'#FFFFFF',
        borderColor:'#EAE0E0',
        borderRadius:14
    }
  });