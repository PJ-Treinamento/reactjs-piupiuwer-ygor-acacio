import axios from "axios";

const Api = axios.create({
  baseURL: "https://piupiuwer.polijrinternal.com",
}) 

const token = window.localStorage.getItem('@piupiuwer:token')

if(token){
  Api.defaults.headers.authorization = `Bearer ${token}`
}
export default Api;