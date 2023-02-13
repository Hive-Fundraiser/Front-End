import axios from "axios";

const BASE_URL = "https://hive.iran.liara.run";
const getCharity = async () => {
    const res = await axios.get('https://hive.iran.liara.run/charity/advertisements/');
    return res.data;
}
export {getCharity};