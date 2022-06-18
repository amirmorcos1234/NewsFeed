import axios from 'axios'

const instance = axios.create({
    baseURL: endpoints.BASE_URL,
    timeout: 1000,
    params:{
        apiKey:'f0dec3f51afb41c180513332f71c74eb'
    }
  });

export default instance