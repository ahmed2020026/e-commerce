import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import CachedIcon from '@mui/icons-material/Cached';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Services = () => {
    return (
        <div className='Services-section my-25'>
            <div className="container">
                <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className='flex p-3 py-4 gap-5 shadow rounded-lg justify-between items-center'>
                        <LocalShippingOutlinedIcon style={{fontSize: '50px'}} className='text-gray-700'/>
                        <div className="info flex-1">
                            <h1 className="title font-semibold">Free Shipping</h1>
                            <p className='text-gray-600'>On orders over $100</p>
                        </div>
                    </div>
                    <div className='flex p-3 py-4 gap-5 shadow rounded-lg justify-between items-center'>
                        <LockOutlineIcon style={{fontSize: '50px'}} className='text-gray-700'/>
                        <div className="info flex-1">
                            <h1 className="title font-semibold">Secure Payment</h1>
                            <p className='text-gray-600'>100% protected payments</p>
                        </div>
                    </div>
                    <div className='flex p-3 py-4 gap-5 shadow rounded-lg justify-between items-center'>
                        <CachedIcon style={{fontSize: '50px'}} className='text-gray-700'/>
                        <div className="info flex-1">
                            <h1 className="title font-semibold">Easy Returns</h1>
                            <p className='text-gray-600'>30-day return policy</p>
                        </div>
                    </div>
                    <div className='flex p-3 py-4 gap-5 shadow rounded-lg justify-between items-center'>
                        <AccessTimeIcon style={{fontSize: '50px'}} className='text-gray-700'/>
                        <div className="info flex-1">
                            <h1 className="title font-semibold">24/7 Support</h1>
                            <p className='text-gray-600'>Dedicated customer service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}