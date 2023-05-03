import config from "./config";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default {
	async getAxiosHeader() {
		const token = await SecureStore.getItemAsync("auth_token");
		return {
			Authorization: "Bearer " + token,
		};
	},

	async getUserDetails() {
		const headers = await this.getAxiosHeader();
		return await axios.get(config.userDetailsEndpoing, {
			headers,
		});
	},

	async register(data) {
		return await axios.post(config.registerEndpoint, data);
	},

	async login(data) {
		return await axios.post(config.loginEndpoint, data);
	},

	async logout() {
		const headers = await this.getAxiosHeader();
		return await axios.get(config.logoutEndpoint, {
			headers,
		});
	},

	// async getNews(){
	//     const options = {
	//         method: 'GET',
	//         url: 'https://api.newscatcherapi.com/v2/search',
	//         params: {q: 'Agriculture', lang: 'hi', sort_by: 'relevancy', page: '1'},
	//         headers: {
	//           'x-api-key': config.newsAPIKey
	//         }
	//       };

	//      return axios.request(options)
	// },

	async getNews() {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=47d0efbb482363037c8bcc590742dd2b`).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
	},

	async postImage(image) {
		let filename = image.split("/").pop();
		let match = /\.(\w+)$/.exec(filename);
		let type = match ? `image/${match[1]}` : `image`;
		let formData = new FormData();
		formData.append("file", { uri: image, name: filename, type });
		return axios.post(`${config.flaskHost}/predict`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	},

    async checkRecommendation(diseaseName){
        return await axios.get(`${config.recommendationEndpoint}/${diseaseName}`)
    }
};
