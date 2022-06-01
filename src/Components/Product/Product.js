import './Product.css'

export const Product = (props) => {
    return (
        <div className="product-card">
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <img src={props.image} alt="" />
        </div>
    )
}
