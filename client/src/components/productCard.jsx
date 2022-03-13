export const ProductCard = ({ product }) => {
    return (
        <div className="productCard">
            <div className="productDiscount">Up to ${product.discount} off</div>
            <img src={product.img} />
            <div className="productTitle">{product.title}</div>
            <div className="productDesc">{product.description}</div>
        </div>
    )
};