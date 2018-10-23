import axios from 'axios'

const actions = {
    async searchForRestaurants(){
        const pathToAPI = "https://gitlo17bai.execute-api.us-east-2.amazonaws.com/default/helloGurunavi"
        const location = await this.getGeolocation()
        const response = await axios({
            method: "GET",
            url: pathToAPI,
            headers: {
                "X-Api-Key": "R9tN89t6By6pRSCgPyIGU9PIZ0zzJdxd9787pbgG"
            },
            params: {
                "latitude": location.coords.latitude,
                "longitude": location.coords.longitude
            }
        })
        const result = response.data.body
        return result
    },

    getGeolocation(){
        const options = {
            "enableHighAccuracy": true,
			"timeout": 8000,
			"maximumAge": 2000
        }
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
    }
}

export default actions