import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import "./products.css";

export const Products = () => {

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
            setLoading(false);
        })
        .catch((e) => console.log(e));
    };

    return(
        <div>
            <h1>All deals ans coupons.</h1>
            <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>

            <div id="container">
                <div id="filterCont">
                    <div className="categoryBox">
                        <h3>Categories</h3>
                        <button>All</button>
                        <button>Clothing & Apparel</button>
                        <button>Computers & Accessories</button>
                        <button>Health & Beauty</button>
                        <button>Household</button>
                    </div>

                    <div className="filterBox">
                        <h3>Filter</h3>
                        <h4>Type</h4>
                        <input type="checkbox" />
                        <label>Only Coupons</label> <br/>
                        <input type="checkbox" />
                        <label>Exclusives</label> <br/>
                        <input type="checkbox" />
                        <label>BOGO and more</label>
                    </div>

                    <div className="filterBox">
                        <h4>Discount</h4>
                        <input type="checkbox" />
                        <label>0-49% off</label> <br/>
                        <input type="checkbox" />
                        <label>50-80% off</label> <br/>
                    </div>
                </div>
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