const Product = ({ name, price, image, badge }) => {
  return (
    <article>       
        <img src={image} alt="handbag" />
        <span role="img" aria-label="handbag">
            {badge}
        </span>
        <p>{name}</p>
        <h4>{price}</h4>
    </article>
  );
};
export default Product;