import axios from "axios";

const Api = axios.create({
  baseURL: "https://piupiuwer.polijrinternal.com",
}) 

//const token = window.localStorage.getItem('token')

//Api.defaults.headers.authorization = token
export default Api;