import { useEffect, useState } from "react";
import { DownLoadData } from "../sections/dataContent";
import { Cart } from "../sections/Cart";

const Product = () => {
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
    const handleChange = (e) => {
        const newProduct = Data.filter((ele) => ele.category == e.target.value);
        setProduct(newProduct);
        if (e == 'all') {
            setProduct(Data)
        }
    }
    return (
        <>
            <section className="pt-30">
                <div className="container">
                    <div className="head px-2 flex items-center gap-2">
                        <select name="filter" onChange={handleChange} className="w-[200px] border-3 p-1 border-gray-300 rounded focus:outline-none focus:border-sky-500">
                            <option value="all">all</option>
                            {Array.from(Uniqe).map((category, index) => <option value={category} key={index}>{category}</option>)}
                        </select>
                    </div>
                    <div className="carts">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10">
                            {
                                product.map((ele, index) => <Cart product={ele} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;