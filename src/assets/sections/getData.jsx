import { useEffect, useState } from "react";
import { DownLoadData } from "./dataContent"
import { Cart } from "./Cart";
import { Link } from 'react-router-dom';


export const GetData = () => {
    const { Data } = DownLoadData();

    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(Data)
    }, [Data])

    const Category = Data?.map((product, index) => {
        return product["category"]
    });
    /* turnOff repeat Categories */
    const Uniqe = new Set(Category);
    /* filter Data */
    const active = (e) => {
        const newProduct = Data.filter((ele) => ele.category == e);
        setProduct(newProduct);
        if (e == 'all') {
            setProduct(Data)
        }
    }
    return (
        <>
            <section className="pt-30">
                <div className="container">
                    <div className="head flex justify-center items-center gap-2">
                        <p className="bg-sky-500 text-white rounded p-1 uppercase px-2 cursor-pointer" onClick={(e) => active('all')}>all</p>
                        {Array.from(Uniqe).map((category, index) => <p className="bg-sky-500 text-white rounded p-1 uppercase px-2 cursor-pointer" onClick={() => active(category)} key={index}>{category}</p>)}
                    </div>
                    <div className="carts">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10">
                            {
                                product.map((ele, index) => {
                                    if(index < 4){
                                        return <Cart product = {ele} key={index}/>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className='text-center mt-5'><Link to={'/product'} className='inline-block bg-sky-500 text-white p-2 rounded-lg px-4'>shopping More</Link></div>
                </div>
            </section>
        </>
    )
}