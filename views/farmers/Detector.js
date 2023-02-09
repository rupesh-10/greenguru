import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator, TouchableWithoutFeedback, Pressable, Modal,StyleSheet, Text} from 'react-native';
import ServicesCard from '../components/ServicesCard';
import * as ImagePicker from 'expo-image-picker';
import Services from '../../api/services'

export default function Detector() {
  const [image, setImage] = useState(null);
  const [isProcessing,setIsProcessing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState('');
  const [isHealthy,setIsHealthy] = useState(false)

  const images = {
    healthy:'https://res.cloudinary.com/dqrrkueir/image/upload/v1675616920/greenguru/customer-service_hjjqkt.png',
    notHealthy:'https://res.cloudinary.com/dqrrkueir/image/upload/v1675616917/greenguru/anxiety_w0fehp.png'
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64:true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
        const imageUrl = result.assets[0].uri
        checkImage(imageUrl,result.base64)
    }
  };


  const captureImage = async () =>{

     // Ask the user for the permission to access the camera
     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

     if (permissionResult.granted === false) {
       alert("You've refused to allow this appp to access your camera!");
       return;
     }

    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        aspect: [4, 3],
        base64:true,
        quality: 1,
    });

    if(!result.canceled){
        const imageUrl = result.assets[0].uri
        checkImage(imageUrl,result.base64)
    }
  }

  const checkImage = (image,base64) => {
        setIsProcessing(true)
        setImage(image);

        Services.postImage(base64).then(res=>{
        setResult('Your plant is healthy, yahoo....')
        setIsHealthy(true)
        setModalVisible(true)
        })
        .finally(()=>{
        setIsProcessing(false)
        })

  }

  const hideModal = ()=>{
    setModalVisible(false)
  }

  return (
    <View style={{height:'100%'}}>
    {isProcessing && <ActivityIndicator size="large" style={{alignSelf:'center',height:'100%',position:'absolute'}} />}
    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
         {image && <Image source={{ uri: image }} style={{ width: 280, height: 280 }} />}
    </View>
    <View style={{flex:1,  flexDirection: "row", justifyContent: 'space-around' }}>
        <ServicesCard imgWidth={80} imgHeight={75} height={120} onPressed={pickImage} title="Upload Image" image="https://res.cloudinary.com/dqrrkueir/image/upload/v1675611282/greenguru/upload-svgrepo-com_jax4ow.png"></ServicesCard>
        <ServicesCard imgWidth={80} imgHeight={75} height={120} onPressed={captureImage} title="Capture Image" image="https://res.cloudinary.com/dqrrkueir/image/upload/v1675611263/greenguru/camera-svgrepo-com_kcjavt.png"></ServicesCard>
    </View>


    <Modal
          visible={modalVisible}
          transparent={true}
          onRequestClose={()=>{setModalVisible(!modalVisible)}}
          animationType='slide'
        >
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>

          <View style={styles.modalContent}>
          <View style={styles.modalView}>
            <Image source={{uri : isHealthy ? images['healthy'] : images['notHealthy']}} style={styles.resultImage}></Image>
            <Text style={styles.modalText}>{result}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close!</Text>
            </Pressable>
          </View>
          </View>
    </Modal>
   
    </View>
  );
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
      },

      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        marginTop:20,
        fontSize:25,
        fontWeight:'500',
        textAlign: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },

      resultImage:{
        height:120,
        width:120
      }
  });