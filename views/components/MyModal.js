import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
    Modal,
    Pressable,
    TouchableWithoutFeedback
} from "react-native";
import commonStyles from "../../assets/styles/common";

export default ServicesCard = (props) => {
	return (
		<Modal
			visible={props.modalVisible}
			transparent={true}
			onRequestClose={ props.onRequestClose}
			animationType="slide"
		>
			<TouchableWithoutFeedback onPress={props.onRequestClose}>
				<View style={styles.modalOverlay} />
			</TouchableWithoutFeedback>

			<View style={styles.modalContent}>
				<View style={styles.modalView}>
					<Image
						source={{
							uri: props.image
						}}
						style={styles.resultImage}
					></Image>
					<Text style={styles.modalText}>{props.text}</Text>
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={props.onRequestClose}
					>
						<Text style={styles.textStyle}>{props.closeButtonText}</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalOverlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,0.5)",
	},

	button: {
		borderRadius: 25,
		padding: 15,
		elevation: 2,
	},

	buttonClose: {
		backgroundColor: "#004B03",
        fontSize:20,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		marginTop: 20,
		fontSize: 18,
		fontWeight: "500",
		textAlign: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "#AFF3AA",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},

	resultImage: {
		height: 120,
		width: 120,
	},
});
