import config from "./config";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

export default {
     async getAxiosHeader(){
        const token = await SecureStore.getItemAsync('auth_token');
        return {
            Authorization:'Bearer '+ token
        }
    },

	async getUserDetails(){
        const headers = await this.getAxiosHeader()
        return await axios.get(config.userDetailsEndpoing,{
            headers
        })
    },

	async register(data) {
		return await axios.post(config.registerEndpoint,data)
	},

    async login(data){
        return await axios.post(config.loginEndpoint,data)
    },

    async logout(){
        const headers = await this.getAxiosHeader()
        return await axios.get(config.logoutEndpoint,{
            headers
        })
    },

    async getNews(){
        const options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'Agriculture', lang: 'hi', sort_by: 'relevancy', page: '1'},
            headers: {
              'x-api-key': config.newsAPIKey
            }
          };
          
         return axios.request(options)
    },

	async postImage(image) {
		return await fetch(`${config.laravelHost}/plants`, {
			method: "POST",
			body: { image },
		});
	},
};
