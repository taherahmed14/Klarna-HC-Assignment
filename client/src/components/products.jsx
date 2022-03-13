import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setFilterAccessories, setFilterBeauty, setFilterClothing, setFilterDiscount, setFilterHousehold, setFilterType, setLoading, setSuccess } from "../features/actions";
import { Filter } from "./filter";
import { ProductCard } from "./productCard";
import "./products.css";

export const Products = () => {

    const { loading, allProducts, data } = useSelector((state) => ({
        loading: state.loading,
        allProducts: state.allProducts,
        data: state.data,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        dispatch(setLoading());
        fetch("http://localhost:5000/product")
        .then((d) => d.json())
        .then((res) => {
            console.log(res.products);
            dispatch(setSuccess(res.products));
        })
        .catch((e) => dispatch(setError()));
    };

    const handleAll = () => {
        getProducts();
    }

    const handleClothing = () => {
        let filterProducts = data.filter(product => product.category === "Clothing & Apparel");
        dispatch(setFilterClothing(filterProducts));
    }

    const handleAccessories = () => {
        let filterProducts = data.filter(product => product.category === "Computers & Accessories");
        dispatch(setFilterAccessories(filterProducts));
    }

    const handleBeauty = () => {
        let filterProducts = data.filter(product => product.category === "Health & Beauty");
        dispatch(setFilterBeauty(filterProducts));
    } 

    const handleHouseHold = () => {
        let filterProducts = data.filter(product => product.category === "Household");
        dispatch(setFilterHousehold(filterProducts));
    } 

    const handleCheckBoxType = (e) => {
        let filterProducts = data.filter(product => product.pro_type === e.target.value);
        dispatch(setFilterType(filterProducts));
    }

    const handleCheckBoxDiscount = (e) => {
        let filterProducts = data.filter(product => product.featured === e.target.value);
        dispatch(setFilterDiscount(filterProducts));
    }

    return(
        <div>
            <h1>All deals and coupons.</h1>
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