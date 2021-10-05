import axios from "axios";

const ENDPOINT_URI = process.env.REACT_APP_API_ENDPOINT;

const instance = axios.create({
  baseURL: ENDPOINT_URI,
});

class AxiosHelper {
  get(url, config = {}) {
    return instance.get(url, { ...config });
  }

  post(url, data, config = {}) {
    console.log(url);
    return instance.post(url, { ...data }, { ...config });
  }
}

export default new AxiosHelper();
