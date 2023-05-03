import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import React,{useEffect} from 'react'
import checkAuthenticated from '../../middlewares/checkAuthenticated';
export default function Splash({navigation}) {
    checkAuthenticated.isAuthenticated()
    return (
      <View style={{
          // Try setting `flexDirection` to `"row"`.
          backgroundColor: '#AFF3AA',
          flex:1,
        }}>

                    <View>
						<Text style={[commonStyles.header4, { margin: "2%" }]}>
							Trending News
						</Text>
						<View
							style={[styles.newsCard, { flexDirection: "row", marginTop: 8 }]}
						>
							<View style={{ flext: 1, maxWidth: "70%" }}>
								<Text style={[commonStyles.paragraph4]}>
									{articles[0].clean_url}
								</Text>
								<Text style={[commonStyles.paragraph2]}>
									{articles[0].title}
								</Text>
								<Text
									style={[
										commonStyles.paragraph3,
										commonStyles.mutedText,
										{ marginTop: 7 },
									]}
								>
									{articles[0].published_date}
								</Text>
							</View>
							<View
								style={{
									flex: 1,
									justifyContent: "center",
									alignContent: "center",
								}}
							>
								<Image
									source={{
										uri: articles[0].media,
									}}
									style={{
										alignSelf: "center",
										height: 69,
										width: 72,
									}}
								></Image>
							</View>
						</View>
					</View> 
         
        </View>
    );
  }
  
const styles = StyleSheet.create({
 
  });
  