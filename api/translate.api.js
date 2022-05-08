import axios from "axios";
const BASE_URL = "https://inputtools.google.com/request";

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @param {String} text 
 * @returns API for translating from English Language to specific language
 */
export default translateAPI = async (from, to, text) => {
    try {
        let { data } = await axios.get(`${BASE_URL}?text=${encodeURI(text)}&itc=${to}-t-i0-und&num=4&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`);
        data = data && data[1] && data[1][0] && data[1][0][1] && data[1][0][1][0];
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};