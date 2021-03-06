const ProductItems = (props) => {
  const pros = props.pro;

  return (
    <div className="flex-container">
      <div key={pros.id}>
        <h4>{pros.title}</h4>
        <img
          src={pros.image}
          alt="TheImage"
          className="image"
          width="200px"
          height="200px"
        />
        <h5>{pros.price}</h5>
        <br />
        <button className="addToCart" onClick={() => props.addItem(pros.id)}>
          <h3>Add to Cart</h3>
        </button>
        <br />
      </div>
    </div>
  );
};

export default ProductItems;
