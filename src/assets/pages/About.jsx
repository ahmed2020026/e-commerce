import { Link } from "react-router-dom"

const About = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        //behavior: "smooth"
    });
    return (
        <section className="pt-35 pb-8 px-3">
            <div className="container shadow-md border-t border-t-[#cccccc57] rounded-md">
                <div className="head text-center px-2 mt-3">
                    <h1 className="text-2xl font-semibold">About <span className="text-sky-500">G</span>-Store</h1>
                </div>
                <div className="mt-5 px-2">
                    <p className="text-gray-700 text-lg">Welcome to <span className="text-sky-500">G</span>-Store, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.</p>
                </div>
                <div className="head mt-10 px-2">
                    <h1 className="text-2xl font-semibold text-sky-500">Our Mission</h1>
                </div>
                <div className="mt-5 px-2">
                    <p className="text-gray-700 text-lg">At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.</p>
                </div>
                <div className="head mt-10 px-2">
                    <h1 className="text-2xl font-semibold text-sky-500">Why Choose <span className="text-sky-500">G</span>-Store</h1>
                </div>
                <div className="mt-5 px-2">
                    <ul className="text-gray-700 text-lg list-disc pl-6  space-y-2">
                        <li>Top-quality electronic products from trusted brands</li>
                        <li>Lightning-fast and secure shipping</li>
                        <li>Reliable customer support, always ready to help</li>
                        <li>Easy returns and hassle-free shopping experience</li>
                    </ul>
                </div>
                <div className="head mt-10 px-2">
                    <h1 className="text-2xl font-semibold text-sky-500">Why Choose <span className="text-sky-500">G</span>-Store</h1>
                </div>
                <div className="mt-5 px-2">
                    <p className="text-gray-700 text-lg">We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</p>
                </div>
                <div className="head mt-10 px-2">
                    <h1 className="text-2xl font-semibold text-sky-500">Join the Zaptro Family</h1>
                </div>
                <div className="mt-3 px-2">
                    <p className="text-gray-700 text-lg">Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p>
                </div>

                <div className="text-center my-10">
                    <Link className='px-3 bg-sky-500 py-2 text-white rounded-lg' to={'/product'}>Start Shopping</Link>
                </div>
            </div>
        </section>
    )
}

export default About;