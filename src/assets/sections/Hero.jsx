import { Link } from 'react-router-dom'
import bg from './images/bg2.webp'
export const Hero = () => {
    return (
        <>
            <section style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }} className='bg-cover relative before:absolute before:inset-0 before:bg-black/50 before:z-0 md:bg-center flex justify-center items-center'>
                <div className="container text-center">
                    <div className='mx-auto md:w-[70%]'>
                        <h1 className='text-white text-5xl font-bold mb-5'>G-Store</h1>
                        <h2 className='text-[#ddd] text-xl font-medium mb-2'>Your one-stop world for next-gen electronics discover every device you need, right at your fingertips.</h2>
                        <Link className='btn-link bg-sky-500 text-white px-10 py-2 mt-3 inline-block rounded-lg border-3 duration-200 border-sky-500 font-medium' to={'/product'}>Explore</Link>
                    </div>
                </div>
            </section>
        </>
    )
}