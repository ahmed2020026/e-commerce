import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export const useProduct = (id) => {
    window.scrollTo({
        top: 0,
        left: 0,
        //behavior: "smooth"
    });
    const GetProduct = async ({ queryKey }) => {
        const [, id] = queryKey;
        const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
        return response.data.product;
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['product', id],
        queryFn: GetProduct,
    })
    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return data
}