import Shopping from '@mui/icons-material/AddShoppingCartOutlined';
import { useParams } from "react-router-dom";
import { useProduct } from "../sections/useAPI";



export const ProductDetails = () => {
    const {id} = useParams();
    /* calc price */
    const priceAfterDiscount = (price , discount) => ( price - price * discount / 100 );
    const product = useProduct(id);
    return (
        <>
            <section className="pt-30">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-3">
                        <div className="product-image bg-white rounded-lg shadow p-3 py-8">
                            <img src={product.image} className="w-[80%] mx-auto " alt={product.title} />
                        </div>
                        <div className="product-info p-2 text-center md:text-left">
                            <h1 className="font-bold text-lg md:text-xl lg:text-2xl">{product.title}</h1>
                            <p className="uppercase my-3">{product.brand} / {product.category} / {product.model}</p>
                            <div className="my-3 text-lg font-semibold">
                                {
                                    product.discount ? (<div>
                                        <del className='bg-gray-200 px-2 py-1 rounded-lg text-blcak p-2 inline-block'>{product.price}$</del>
                                        <span className="bg-red-500 px-2 py-1 rounded-lg text-white mx-3 p-2 inline-block">{product.discount}% Discount</span>
                                        <span className="bg-green-500 px-2 py-1 rounded-lg text-white p-2 inline-block">{priceAfterDiscount(product.price, product.discount)}$</span>
                                    </div>
                                    ) : (<span className="bg-green-500 px-2 py-1 rounded-lg text-white p-2 inline-block">{product.price}</span>)
                                }
                            </div>
                            <p className="text-lg font-medium">{product.color}</p>
                            <p className="text-lg text-gray-500 my-3">{product.description}</p>
                            <div className="btns mt-5">
                                <button className="bg-sky-500 hover:bg-sky-700 duration-300 text-lg p-2 px-5 cursor-pointer text-center text-white rounded-lg"><Shopping /> <span className='ml-2'>Add To Cart</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}