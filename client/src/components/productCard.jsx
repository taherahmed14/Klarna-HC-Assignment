import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product._id}`} style={{textDecoration: 'none'}} >
            <div className="productCard">
                <div className="productDiscount">Up to ${product.discount} off</div>
                <img src={product.img} />
                <div className="productTitle">{product.title}</div>
                <div className="productDesc">{product.description}</div>
            </div>
        </Link>
    )
};