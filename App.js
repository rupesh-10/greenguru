import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Image } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: '#AFF3AA',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dqrrkueir/image/upload/v1672686426/greenguru/image-removebg-preview_ylexxr.png',
        }}
        style={{width: 250, height: 270}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
