// import { MAIN_API } from '@env';
import axios from "axios";
const ApiManager = axios.create({
    baseURL:'https://api.cendratama.co.id/api',
    responseType:'json',
    // withCredentials:true

});
export default ApiManager;