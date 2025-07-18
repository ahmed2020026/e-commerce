import FaceBook from '@mui/icons-material/FacebookRounded';
import Instegram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';

export const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
                    <div className="py-2">
                        <h1 className="font-bold text-2xl uppercase text-white"><span className="text-sky-600">G</span>-Store</h1>
                        <div className="infor text-gray-300 py-2">
                            <p className="mb-2">Powering Your World with the Best in Electronics.</p>
                            <p>123 Electronics St, Style City, NY 10001</p>
                            <p>Email: support@G-Store.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className="social-media my-4">
                            <h1 className="font-semibold text-2xl text-white">Follow Us</h1>
                            <div className="icons mt-2 flex items-center gap-1.5">
                                <span className='text-gray-300'>
                                    <FaceBook />
                                </span>
                                <span className='text-gray-300'>
                                    <Twitter />
                                </span>
                                <span className='text-gray-300'>
                                    <Instegram />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="py-2">
                        <h1 className="font-semibold text-2xl text-white">Customer Service</h1>
                        <ul className="py-3">
                            <li className="mb-2 text-gray-200">Contact Us</li>
                            <li className="mb-2 text-gray-200">Shipping & Returns</li>
                            <li className="mb-2 text-gray-200">FAQs</li>
                            <li className="mb-2 text-gray-200">Order Tracking</li>
                            <li className="mb-2 text-gray-200">Size Guide</li>
                        </ul>
                    </div>
                    <div className="py-2">
                        <h1 className="font-semibold text-2xl text-white">Stay in the Loop</h1>
                        <div className="infor text-gray-300 py-2">
                            <p className="mb-2">Subscribe to get special offers, free giveaways, and more</p>
                            <div className="formInput flex">
                                <input type="text" className="bg-white outline-0 flex-1 rounded border-2 border-transparent text-black px-2 focus:border-sky-300" placeholder="Enter Your Email" />
                                <button className="bg-sky-500 p-3 rounded text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr style={{ color:"oklch(0.39 0.08 242.7)"}}/>
                <p className='py-5 text-lg text-gray-100 text-center'>© 2025 <span className='text-sky-500'>G</span>-Store All rights reserved</p>
            </div>
        </>
    )
}