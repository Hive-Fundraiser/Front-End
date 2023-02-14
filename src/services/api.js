import axios from "axios";

const BASE_URL = "https://hive.iran.liara.run";
const getCharity = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
}
export {getCharity};