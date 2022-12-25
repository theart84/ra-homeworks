import {Component} from "react";
import PropTypes from 'prop-types';

class ShopItem extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>{this.props.item.brand}</h2>
        <h1>{this.props.item.title}</h1>
        <h3>{this.props.item.description}</h3>
        <div className="description">{this.props.item.description}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{`${this.props.item.currency}${this.props.item.price}.00`}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
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
