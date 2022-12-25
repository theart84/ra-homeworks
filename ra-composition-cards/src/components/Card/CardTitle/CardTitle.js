import PropTypes from 'prop-types';

const CardTitle = (props) => <h5 className="card-title">{props.children}</h5>

CardTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default CardTitle;
