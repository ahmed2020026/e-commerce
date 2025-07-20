import { getProductCart } from "../sections/addToCart"
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyCart from "../sections/EmptyCart";
import View from "../sections/View";

const CheckOutCart = () => {
    const { cartItems, removeFromCart, clearCart, calcTatalPrice } = getProductCart();
    const priceAfterDiscount = (price, discount) => (price - price * discount / 100);
    window.scrollTo({
        top: 0,
        left: 0,
        //behavior: "smooth"
    });
    return (
        <>
            <section className="pt-15 pb-10">
                <View title="Checkout" />
                <div className="container">
                    {cartItems.length !== 0 && <button className="bg-red-500 text-base text-white rounded-lg p-1 cursor-pointer mb-3" onClick={clearCart}>Clear ALL</button>}
                    {cartItems.length !== 0 ? (
                        <div className="lg:grid lg:grid-cols-3 gap-7 items-start">
                            <div className="col-span-2">
                                {cartItems.map((product, index) => {
                                    return (
                                        <div key={index} className="col-span-2 grid grid-cols-4 py-3 px-2 rounded-lg gap-4 mb-5 shadow-lg border-t border-[#cccccc8e]">
                                            <div className="product-image text-center relative bg-white rounded-lg shadow">
                                                <img src={product.image} className="max-w-[100%] md:max-w-[80%] lg:max-w-[50%] mx-auto bg-gray-300" alt="hidden" />
                                            </div>
                                            <div className="product-info col-span-3">
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
                                })}
                            </div>
                            <div className="shadow-lg border-t border-[#ddd] rounded-lg overflow-hidden">
                                <h1 className="bg-sky-500 text-white font-bold p-2 py-3">Shopping Details</h1>
                                <p className="p-2 py-3"><span className="font-semibold">Total:</span> {calcTatalPrice.toFixed(2)}$</p>
                                <form className="p-3">
                                    <h1 className="mb-3 text-center font-semibold text-xl">Shopping Information</h1>
                                    <input type="text" placeholder="Name" name="user_name" className="block w-full outline-0 border border-[#ddd] mb-2 p-2 rounded focus:border-sky-500" autoComplete="off" />
                                    <input type="email" placeholder="Email Address" name="user_email" className="block w-full outline-0 border border-[#ddd] mb-2 p-2 rounded focus:border-sky-500" autoComplete="off" />
                                    <input type="number" placeholder="Number" name="phone_number" className="block w-full outline-0 border border-[#ddd] mb-2 p-2 rounded focus:border-sky-500" autoComplete="off" />
                                    <button onClick={(e) => e.preventDefault()} className="bg-sky-500 px-2 py-1 text-white rounded cursor-pointer">Submit</button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <EmptyCart />
                    )}
                </div>
            </section >
        </>
    )
}
export default CheckOutCart;