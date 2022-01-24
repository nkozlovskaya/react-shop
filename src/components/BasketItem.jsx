function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item ">
      {name}{" "}
      <i className="material-icons bask-q" onClick={() => decQuantity(id)}>
        remove
      </i>{" "}
      X {quantity}{" "}
      <i className="material-icons bask-q" onClick={() => incQuantity(id)}>
        add
      </i>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
export { BasketItem };
