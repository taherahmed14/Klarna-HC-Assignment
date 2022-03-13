import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setFindIdError, setFindIdLoading, setFindIdSuccess } from "../features/actions";

export const ProductDetail = () => {
    const { id } = useParams();

    const { loading, product, error } = useSelector((state) => ({
        loading: state.loading,
        product: state.product,
        error: state.error
    }));

    const dispatch = useDispatch();
    
    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = () => {
        dispatch(setFindIdLoading());
        fetch(`http://localhost:5000/product/${id}`)
        .then((d) => d.json())
        .then((res) => {
            console.log(res.product);
            dispatch(setFindIdSuccess(res.product));
            // setProduct(res.product);
        })
        .catch((e) => dispatch(setFindIdError()));
    }

    return(
        <div className="productDetail">
            <div className="productDiscount">Up to ${product.discount} off</div>
            <img src={product.img} />
            <div className="productDetailTitle">{product.title}</div>
            <div className="productDetailDesc">{product.description}</div>
            <button className="shopDealBtn">Shop deal</button>
        </div>
    )
};