import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <>
            <div className="edd-cart-empty text-center shadow-lg border-t border-gray-200 mb-10">
                <h3>Looks like your cart is empty.</h3>
                <img src="https://dev1.edwiser.org/wp-content/uploads/2025/01/empty-cart-illustration.png" />
                <p className="text-base font-medium text-gray-600">Discover the perfect tools to power up your Moodle site!</p>
                <Link to ="/product" className="font-semibold px-4 py-2 rounded bg-sky-500 text-white duration-300">Explore Edwiser products</Link>
            </div>
        </>
    )
}
/* font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: #4b5858;*/
export default EmptyCart;