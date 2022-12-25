import CardImage from "./CardImage/CardImage";
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className="card align-self-start" style={props.style}>
    {props.imageURL && <CardImage imageURL={props.imageURL}/>}
      <div className="card-body">{props.children}</div>
  </div>
);

Card.propTypes = {
  style: PropTypes.object,
  imageURL: PropTypes.string,
  children: PropTypes.node
}

export default Card;
