import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator, TouchableWithoutFeedback, Pressable, Modal,StyleSheet, Text} from 'react-native';
import ServicesCard from '../components/ServicesCard';
import * as ImagePicker from 'expo-image-picker';
import COLORS from '../consts/colors';
import Services from '../../api/services'

export default function Detector() {
  const [image, setImage] = useState(null);
  const [isProcessing,setIsProcessing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState('');
  const [recommendation,setRecommendation] = useState('');
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
        checkImage(imageUrl)
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
        console.log('Image hai camera bata.............')
        console.log(imageUrl)
        checkImage(imageUrl)
    }
  }

  const checkImage = async (image) => {
        setIsProcessing(true)
        setImage(image);
        console.log(image)
        Services.postImage(image).then(async res=>{
        const {data} = res.data
        const splitedData = data.split('___')
        let plantName = ''
        let diseaseName =''
        console.log('----------------')
        console.log(data)
        console.log('---------------')
        if(splitedData.length > 0){
             plantName = splitedData[0].replaceAll('_',' ')
             diseaseName = splitedData[1].replaceAll('_',' ')
        }
        const {probability} = res.data
        const {status} = res.data
        if(status==200){
            if(diseaseName.toLowerCase().includes('healthy')){
                setResult(`Congratulation, your plant ${plantName} is healthy`)
                setIsHealthy(true)
                return setModalVisible(true)
            }
            await Services.checkRecommendation(data).then(res=>{
                setRecommendation(res.data.message)
            })
            setResult(`Oops! Your plant ${plantName} is effected by${diseaseName.toLowerCase()}`)
            setIsHealthy(false)
            setModalVisible(true)
        }
        }).catch(err=>{
            console.log(err)
        })
        .finally(()=>{
         setIsProcessing(false)
        })

  }

  const hideModal = ()=>{
    setModalVisible(false)
  }

  return (
    <View style={{height:'100%',backgroundColor:COLORS.backGrey}}>
    {isProcessing && <ActivityIndicator size="large" style={{alignSelf:'center',height:'100%',position:'absolute'}} />}
    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
         {image && <Image source={{ uri: image }} style={{ width: 300, height: 280, borderRadius:15 }} />}
    </View>
    <View style={{flex:1,  flexDirection: "row", justifyContent: 'space-around' }}>
        <ServicesCard imgWidth={80} imgHeight={75} height={120} onPressed={pickImage} title="Upload Image" image="https://res.cloudinary.com/dqrrkueir/image/upload/v1676100822/greenguru/image-removebg-preview_6_h6amuh.png"></ServicesCard>
        <ServicesCard imgWidth={80} imgHeight={75} height={120} onPressed={captureImage} title="Capture Image" image="https://res.cloudinary.com/dqrrkueir/image/upload/v1676100911/greenguru/image-removebg-preview_7_cidpia.png"></ServicesCard>
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
          <View style={[styles.modalView,{backgroundColor:'white'}]}>
            <Image source={{uri : isHealthy ? images['healthy'] : images['notHealthy']}} style={styles.resultImage}></Image>
            <Text style={[styles.modalText,{color:isHealthy?'#97d260':'#C61041'}]}>{result}</Text>
            {!isHealthy && (<Text style={[styles.modalText,{}]}>{recommendation}</Text>)}
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
        backgroundColor:'rbga(255,255,255,0)'
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