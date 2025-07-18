import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import User from '@mui/icons-material/Person';
export const Contact = () => {
    return (
        <section className="pt-35 pb-8 px-3">
            <div className="container shadow-md border-t border-t-[#cccccc57] rounded-md">
                <div className="head text-center px-2 mt-3">
                    <h1 className="text-2xl font-semibold">Get in Touch with <span className="text-sky-500">G</span>-Store</h1>
                </div>
                <div className="contact grid md:grid-cols-2 gap-5 py-7">
                    <div className="contact-info px-2">
                        <h1 className="text-2xl font-semibold mb-2">Contact Info</h1>
                        <p className="text-lg text-gray-700 mb-5">Have a question or need support? We're here to help you with your electronics journey.</p>
                        <div className="info">
                            <div className='flex gap-1 mb-2'>
                                <LocationOnIcon style={{color: "#555"}} />
                                <h2 className='mr-2 font-semibold text-gray-700'>Address:</h2> 123 Tech Lane, Kolkata, India
                            </div>
                            <div className='flex gap-1 mb-2'>
                                <EmailIcon style={{color: "#555"}} />
                                <h2 className='mr-2 font-semibold text-gray-700'>Email:</h2> support@G-Store.com
                            </div>
                            <div className='flex gap-1 mb-2'>
                                <PhoneIcon style={{color: "#555"}} />
                                <h2 className='mr-2 font-semibold text-gray-700'>Phone:</h2> +91 98765 43210
                            </div>
                        </div>
                    </div>
                    <div className="contact-form px-2">
                        <div className='form-input relative'>
                            <label htmlFor="YourName" className='block'>Your Name</label>
                            <User style={{ color: "#555" }} className='absolute top-8 left-2' />
                            <input type="text" id = "YourName" name='YourName' className='border-2 border-gray-400 w-full outline-0 rounded p-2 pl-9 focus:border-sky-500'/>
                        </div>

                        <div className='form-input relative mt-5'>
                            <label htmlFor="address" className='block'>Email Address</label>
                            <EmailIcon style={{ color: "#555" }} className='absolute top-8 left-2' />
                            <input type="text" id = "address" name='address' className='border-2 border-gray-400 w-full outline-0 rounded p-2 pl-9 focus:border-sky-500'/>
                        </div>
                        <div className='form-input relative mt-5'>
                            <label htmlFor="message" className='block'>Message</label>
                            <textarea name="message" id="message" className='border-2 border-gray-400 w-full outline-0 rounded p-2 focus:border-sky-500 resize-none' defaultValue={"message"}></textarea>
                        </div>
                        <div className='mt-5'>
                            <button className='px-8 py-1.5 cursor-pointer text-white bg-sky-500 rounded hover:bg-sky-700 duration-300'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}