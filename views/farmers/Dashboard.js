import React, { useState, useEffect } from "react";
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
} from "react-native";
import commonStyles from "../../assets/styles/common";
import { auth } from "../../firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignupScreen from "../common/Signup";
const Tab = createBottomTabNavigator();
import ServiceCard from "../components/ServicesCard";
import services from "../../api/services";
import * as SecureStore from 'expo-secure-store';
import checkAuthenticated from '../../middlewares/checkAuthenticated';

export default Dashboard = ({ navigation }) => {
    checkAuthenticated.isNotAuthenticated()
    const [user,setUser] = useState({})
    const [articles,setArticles] = useState([])
    const [isProcessing,setIsProcessing] = useState(false)

	const redirectToDetector = () => {
		return navigation.navigate("Detector");
	};

	const handleLogout = () => {
		services.logout().then(async (res) => {
            console.log(res)
            await SecureStore.deleteItemAsync('auth_token');
			navigation.replace("Login");
		}).catch(err=>{
            console.log(err)
        });
	};
    
    services.getUserDetails().then(res=>{
        setUser(res.data)
    }).catch(err=>{
        console.log(err)
    });

    services.getNews().then(res=>{
        setArticles(res.data.articles)
    }).catch(err=>{
        console.log(err)
    })

	function greetNow() {
		const hour = new Date().getHours();
		let welcomeText = "Morning";
		const welcomeTypes = ["Morning", "Afternoon", "Evening"];
		if (hour < 12) welcomeText = welcomeTypes[0];
		else if (hour < 18) welcomeText = welcomeTypes[1];
		else welcomeText = welcomeTypes[2];
		return welcomeText;
	}

	return (
		<View style={{ height: "100%" }}>
			<ScrollView style={commonStyles.greyView}>
				<View style={styles.welcomeCard}>
					<Text
						style={[
							commonStyles.header3,
							commonStyles.whiteText,
							commonStyles.selfCenter,
						]}
					>
						Good {greetNow()}
					</Text>
					<Text
						style={[
							commonStyles.header4,
							commonStyles.whiteText,
							commonStyles.selfCenter,
						]}
					>
						{user?.name}
					</Text>
					<Text
						style={[
							commonStyles.header5,
							commonStyles.whiteText,
							commonStyles.selfCenter,
						]}
					>
						19°C
					</Text>
				</View>
				<View style={{ margin: 8 }}>
					<View>
						<Text style={[commonStyles.header4, { margin: "2%" }]}>
							Weather Report
						</Text>
						<View
							style={[
								styles.weatherCard,
								{ flexDirection: "row", marginTop: 8 },
							]}
						>
							<View style={{ flext: 1 }}>
								<Text style={[commonStyles.paragraph1]}>Hetauda, 1 Jan</Text>
								<Text style={[commonStyles.paragraph1]}>19° C</Text>
								<Text
									style={[
										commonStyles.paragraph3,
										commonStyles.mutedText,
										{ marginTop: 8 },
									]}
								>
									Sunset 6:00 PM
								</Text>
								<Text style={commonStyles.paragraph3}>
									Rain expected at 7:00 PM
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
										uri: "https://res.cloudinary.com/dqrrkueir/image/upload/v1673359840/greenguru/image-removebg-preview_5_2_bkwsnt.png",
									}}
									style={{
										alignSelf: "center",
										height: 89,
										width: 118,
									}}
								></Image>
							</View>
						</View>
					</View>
					<View style={{ marginTop: 10, margin: "2%" }}>
						<Text style={commonStyles.header4}>Services</Text>
						<View
							style={[
								{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 15,
								},
							]}
						>
							<ServiceCard
								onPressed={redirectToDetector}
								title="Detect Disease"
								image="https://res.cloudinary.com/dqrrkueir/image/upload/v1675493895/greenguru/image-removebg-preview_3_vm5zjq.png"
							></ServiceCard>
							<ServiceCard
								title="Community"
								imgWidth={39}
								imgHeight={75}
								image="https://res.cloudinary.com/dqrrkueir/image/upload/v1673361866/greenguru/pngwing_5_wzeohh.png"
							></ServiceCard>
						</View>

						<View
							style={[
								{
									flexDirection: "row",
									justifyContent: "space-between",
									marginTop: 15,
								},
							]}
						>
							<ServiceCard
								title="My History"
								imgWidth={52}
								imgHeight={75}
								image="https://res.cloudinary.com/dqrrkueir/image/upload/v1673361867/greenguru/pngwing_8_ufujs0.png"
							></ServiceCard>
							<ServiceCard
                                onPressed={()=>{
                                    navigation.navigate('Shop')
                                }}
								title="Shops"
								imgWidth={39}
								imgHeight={75}
								image="https://res.cloudinary.com/dqrrkueir/image/upload/v1673361866/greenguru/pngwing_5_wzeohh.png"
							></ServiceCard>
						</View>
					</View>
                
                {(articles[0] && articles[0].length) && 
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
                    }
				</View>
				<TouchableOpacity onPress={handleLogout}>
					<Text>Logout</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	welcomeCard: {
		width: "96%",
		alignSelf: "center",
		margin: 8,
		padding: 8,
		backgroundColor: "#004B03",
		borderRadius: 13,
		borderColor: "#004B03",
	},

	weatherCard: {
		width: "96%",
		alignSelf: "center",
		padding: 18,
		backgroundColor: "#FFFFFF",
		borderRadius: 14,
		borderColor: "#EAE0E0",
	},

	newsCard: {
		width: "96%",
		alignSelf: "center",
		padding: 16,
		backgroundColor: "#FFFFFF",
		borderRadius: 14,
		borderColor: "#EAE0E0",
	},

	serviceCard: {
		width: 180,
		height: 110,
		backgroundColor: "#FFFFFF",
		borderColor: "#EAE0E0",
		borderRadius: 14,
	},
});
