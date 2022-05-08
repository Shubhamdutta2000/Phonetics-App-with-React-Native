import axios from "axios";
const BASE_URL = "https://translate.googleapis.com/translate_a/single";

/**
 * 
 * @param {String} from 
 * @param {String} to 
 * @param {String} text 
 * @returns API for translating from English Language to specific language
 */
export default translateAPI = async (from, to, text) => {
    try {
        let { data } = await axios.get(`${BASE_URL}?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`);
        data = data && data[0] && data[0][0] && data[0].map(s => s[0]).join("");
        return data;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
};