import PropTypes from 'prop-types';

const ShopItem = (props) => {
  return (
    <div className="main-content">
      <h2>{props.item.brand}</h2>
      <h1>{props.item.title}</h1>
      <h3>{props.item.description}</h3>
      <div className="description">{props.item.description}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${props.item.currency}${props.item.price}.00`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ShopItem;

ShopItem.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string
  })
}
