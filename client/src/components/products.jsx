import { useEffect, useState } from "react";


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

    //console.log(allProducts[0]);

    return(
        <div>
            
        </div>
    )
};