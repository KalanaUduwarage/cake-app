const PartyItem = (props) => {
  const pros = props.pro;

  return (
    <div className="productItem-view">
      <div className="Item-view" key={pros.id}>
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
      </div>
    </div>
  );
};

export default PartyItem;
