import Shopping from '@mui/icons-material/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';


export const Cart = ({ product: props }) => {
    return (
        <>
            <div className="p-3">
                <div className="cart-content rounded-2xl p-4 shadow hover:shadow-2xl duration-500 cursor-pointer bg-white">
                    <div className="product-image text-center">
                        <img src={props.image} alt={props.title} className="w-[80%] mx-auto aspect-[2/1.8]" />
                    </div>
                    <div className="product-info my-3">
                        <Link to={`${props.id}`} className="line-clamp-2 p-1 font-semibold">{props.title}</Link>
                        <p className="text-red-500 font-semibold">{props.price}$</p>
                    </div>
                    <div className="btns mt-5">
                        <button className="bg-sky-500 block w-full hover:bg-sky-700 duration-300 text-lg p-2 cursor-pointer text-center text-white rounded-lg" onClick={() => addToCart(props)}><Shopping /> <span className='ml-2'>Add To Cart</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
