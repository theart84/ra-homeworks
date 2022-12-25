import PropTypes from 'prop-types';

const CardText = (props) => (
  <p className="card-text">{props.children}</p>
);

CardText.propTypes = {
  children: PropTypes.string.isRequired
}

export default CardText;
