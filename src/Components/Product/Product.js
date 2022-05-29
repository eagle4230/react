import './Product.css'

function Product(props) {
    return (
        <div className="product-card">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <img src={props.image} alt="" />
        </div>
    )
}

export default Product;