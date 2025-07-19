import { useEffect, useRef, useState } from "react";
import { DownLoadData } from "../sections/dataContent";
import { Cart } from "../sections/Cart";

const Product = () => {
    const { Data } = DownLoadData();
    const category = useRef();
    const max = useRef();
    const min = useRef();
    
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
    const handleChange = () => {
        const Category_selected = category.current.value;
        const maxPrice = max.current.value;
        const minPrice = min.current.value

        /* flter Category */
        let newProduct = Data.filter((ele) => ele.category == Category_selected);
        //setProduct(newProduct);
        if (Category_selected == 'all') {
            //setProduct(Data)
            newProduct = Data
        }

        /* filter Price */
        if (maxPrice != '') newProduct = newProduct.filter(ele => ele.price <= Number(maxPrice))
        if (minPrice != '') newProduct = newProduct.filter(ele => ele.price >= Number(minPrice))
        setProduct(newProduct)
    }
    return (
        <>
            <section className="pt-30">
                <div className="container">
                    <div className="head md:grid md:grid-cols-3 gap-2 px-2">
                        <div className="category-input">
                            <select name="filter" ref={category} className="block w-full border-2 p-1 border-gray-300 rounded focus:outline-none focus:border-sky-500">
                                <option value="all">all</option>
                                {Array.from(Uniqe).map((category, index) => <option value={category} key={index}>{category}</option>)}
                            </select>
                        </div>
                        <div className="maxPrice-input mt-3 md:mt-0">
                            <input type="number" name="max" ref={max} placeholder="Max Price" className="block w-full border-2 p-1 border-gray-300 rounded focus:outline-none focus:border-sky-500" />
                        </div>
                        <div className="minPrice-input mt-3 md:mt-0 flex gap-2">
                            <input type="number" name="min" ref={min} placeholder="Min Price" className="block w-full border-2 p-1 border-gray-300 rounded focus:outline-none focus:border-sky-500" />
                            <button className="bg-sky-500 px-2 rounded-lg text-white cursor-pointer py-1" onClick={handleChange}>search</button>
                        </div>
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