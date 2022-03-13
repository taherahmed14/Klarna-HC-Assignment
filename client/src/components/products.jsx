import { useEffect, useState } from "react";
import { Filter } from "./filter";
import { ProductCard } from "./productCard";
import "./products.css";

export const Products = () => {
    const [data, setData] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:5000/product")
        .then((d) => d.json())
        .then((res) => {
            console.log(res.products);
            setAllProducts(res.products);
            setData(res.products);
            setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    const handleAll = () => {
        getProducts();
    }

    const handleClothing = () => {
        let filterProducts = data.filter(product => product.category === "Clothing & Apparel");
        setAllProducts(filterProducts);
    }

    const handleAccessories = () => {
        let filterProducts = data.filter(product => product.category === "Computers & Accessories");
        setAllProducts(filterProducts);
    }

    const handleBeauty = () => {
        let filterProducts = data.filter(product => product.category === "Health & Beauty");
        setAllProducts(filterProducts);
    } 

    const handleHouseHold = () => {
        let filterProducts = data.filter(product => product.category === "Household");
        setAllProducts(filterProducts);
    } 

    const handleCheckBoxType = (e) => {
        let filterProducts = data.filter(product => product.pro_type === e.target.value);
        setAllProducts(filterProducts);
    }

    const handleCheckBoxDiscount = (e) => {
        let filterProducts = data.filter(product => product.featured === e.target.value);
        setAllProducts(filterProducts);
    }

    return(
        <div>
            <h1>All deals ans coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>

            <div id="container">
                <Filter handleCheckBoxDiscount={handleCheckBoxDiscount} handleCheckBoxType={handleCheckBoxType}
                    handleAll={handleAll} handleClothing={handleClothing} handleAccessories={handleAccessories}
                    handleBeauty={handleBeauty} handleHouseHold={handleHouseHold} />
                <div id="productCont">
                    {loading ? "Loading..." : 
                    <div>
                        <h3 style={{ textAlign: "left", padding: "10px" }}>{allProducts.length} deals</h3>
                        <div className="productList">
                            {allProducts.map((e) => ( <ProductCard key={e._id} product={e} /> ))}
                        </div>
                    </div>
                    } 
                </div>
            </div>
        </div>
    )
};