import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
    ActivityIndicator
} from "react-native";
import commonStyles from "../../assets/styles/common";
import React, { useEffect, useState } from "react";
import services from "../../api/services";
import { auth, database } from "../../firebase";
import * as Device from "expo-device";


export default Signup = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");
	const [name, setName] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [errorMessage, setErrorMessage] = useState({
		email: "",
		password: "",
		name: "",
	});

	// useEffect(()=>{
	//    const unsubscribe =  auth.onAuthStateChanged(user=>{
	//         if(user){
	//             navigation.replace('FarmerDashboard')
	//         }
	//     })

	//     return unsubscribe;
	// },[])

	const handleSignup = () => {
		setIsProcessing(true);
		services
			.register({
				email,
				password,
				cPassword,
				deviceName: Device.deviceName,
				name,
			})
			.then((res) => {
				const { data } = res;

				if (data.status) {
					navigation.navigate("Login",{afterSignup:true,userName:name});
				} else {
					console.log(data);
					setErrorMessage({
						email: data.messages.email ? data.messages.email[0] : "",
						password: data.messages.password ? data.messages.password[0] : "",
						name: data.messages.name ? data.messages.name[0] : "",
					});
				}
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setIsProcessing(false);
			});
	};

	return (
		<View style={commonStyles.greenView}>
			{isProcessing && (
				<ActivityIndicator
					size="large"
					style={{ alignSelf: "center", height: "100%", position: "absolute" }}
				/>
			)}
			<Text style={commonStyles.header2}>Signup</Text>
			<View style={{ paddingTop: 20 }}>
				<View style={{ paddingTop: 20 }}>
					<TextInput
						style={styles.input}
						value={name}
						onChangeText={(text) => {
							setName(text);
						}}
						placeholder="Full Name"
					/>
					{errorMessage.name && (
						<Text style={styles.errorMessage}>{errorMessage.name}</Text>
					)}
				</View>

				<View style={{ paddingTop: 20 }}>
					<TextInput
						style={styles.input}
						placeholder="Email"
						value={email}
						autoCapitalize="none"
						onChangeText={(text) => {
							setEmail(text);
						}}
					/>
					{errorMessage.email && (
						<Text style={styles.errorMessage}>{errorMessage.email}</Text>
					)}
				</View>

				<View style={{ paddingTop: 20 }}>
					<TextInput
						style={styles.input}
						placeholder="Password"
						value={password}
						autoCapitalize="none"
						onChangeText={(text) => {
							setPassword(text);
						}}
						secureTextEntry
					/>
					{errorMessage.password && (
						<Text style={styles.errorMessage}>{errorMessage.password}</Text>
					)}
				</View>

				<View style={{ paddingTop: 20 }}>
					<TextInput
						style={styles.input}
						placeholder="Confirm Password"
						value={cPassword}
						autoCapitalize="none"
						onChangeText={(text) => {
							setCPassword(text);
						}}
						secureTextEntry
					/>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("Login")}>
					<Text style={styles.alreadyHaveAccount}>
						Already have an account ?
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.signupButton}
					onPress={handleSignup}
					underlayColor="#fff"
				>
					<Text style={styles.signupText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
			
		</View>
	);
};
const styles = StyleSheet.create({
	input: {
		height: 67,
		borderWidth: 2,
		borderRadius: 15,
		borderColor: "#2D2D2D",
		padding: 10,
		fontSize: 24,
		color: "#295A54",
	},
	signupButton: {
		height: 64,
		backgroundColor: "#004B03",
		borderRadius: 30,
		marginTop: 20,
		borderWidth: 1,
		borderColor: "#004B03",
		display: "flex",
		justifyContent: "center",
	},
	signupText: {
		color: "#fff",
		textAlign: "center",
		fontSize: 20,
		lineHeight: 23,
		fontWeight: "400",
	},
	alreadyHaveAccount: {
		alignSelf: "flex-end",
		lineHeight: 26,
		fontWeight: "500",
		color: "#2D2D2D",
		fontSize: 22,
		marginTop: 10,
	},

	errorMessage: {
		fontSize: 20,
		color: "#DC143C",
		marginTop: 10,
		fontWeight: "600",
		marginLeft: 10,
	},
});
