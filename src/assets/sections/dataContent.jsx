import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
export const Product = createContext(null);

const ProductData = ({ children }) => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.in/api/products');
                setData(res.data.products)
            } catch (error) {
                console.log(error.message)
            }
        }
        loadData();
    }, [])
    return <Product.Provider value={{ Data, setData }}>
        {children}
    </Product.Provider>
}
export default ProductData;
export const DownLoadData = () => useContext(Product)
