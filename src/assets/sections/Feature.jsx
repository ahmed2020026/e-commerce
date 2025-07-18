import { Link } from 'react-router-dom'
import imgFeature from '../sections/images/feture.png'

export const Feature = () => {
    return (
        <>
            <section className="bg-white pt-40">
                <div className="container">
                    <div className="content md:grid grid-cols-2 gap-3">
                        <div className="image mb-5 md:mb-0">
                            <img src={imgFeature} alt="Feature" />
                        </div>
                        <div className="feture-info px-2 text-center md:text-left mb-10 md:mb-0">
                            <h1 className='font-bold text-2xl md:text-3xl mb-4 md:mb-2'>Feature G-Store</h1>
                            <h2 className='text-base md:text-lg text-gray-500 mb-5'>G-Store was founded with the goal of providing a carefully selected collection of high-quality electronic devices to our valued customers. We are committed to offering authentic products from leading brands, along with excellent customer service, ensuring a satisfying shopping experience.</h2>
                            <Link className='btn-link bg-sky-500 text-white px-10 py-1.5 mt-3 inline-block rounded-lg border-3 duration-200 border-sky-500 font-medium' to={'/product'}>Explore</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}