import { getProductCart } from "../sections/addToCart"
import DeleteIcon from '@mui/icons-material/Delete';

const CheckOutCart = () => {
    const { cartItems, removeFromCart, clearCart } = getProductCart();
    const priceAfterDiscount = (price, discount) => (price - price * discount / 100);

    return (
        <>
            <section className="pt-30">
                <div className="container">
                    {
                        cartItems.map((product , index) =>{
                            return (
                                <div key={index} className="grid grid-cols-3 py-3 px-2 rounded-lg gap-4 mb-5 shadow-lg border-t border-[#cccccc8e]">
                                    <div className="product-image text-center relative">
                                        <img src={product.image} className="w-3/4 mx-auto bg-gray-300" alt="hidden" />
                                    </div>
                                    <div className="product-info col-span-2">
                                        <h1 className="line-clamp-1 p-1 font-semibold">{product.title}</h1>
                                        
                                        <div className="flex justify-between items-center pr-3">
                                            <div className="my-3 text-sm font-semibold">
                                                {
                                                    product.discount ? (<div>
                                                        <span className="bg-green-500 px-1 py-1 rounded-lg text-white inline-block">{priceAfterDiscount(product.price, product.discount)}$</span>
                                                    </div>
                                                    ) : (<span className="bg-green-500 px-2 py-1 rounded-lg text-white p-2 inline-block">{product.price}</span>)
                                                }
                                            </div>
                                            <button className="border border-[#ff00009a] text-[#ff00009c] rounded-md cursor-pointer" onClick={() => removeFromCart(product.id)}><DeleteIcon /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
export default CheckOutCart;