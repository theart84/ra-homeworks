import PropTypes from 'prop-types';

const Button = (props) => <a href={props.url} className="btn btn-primary">{props.children}</a>

Button.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string
}

export default Button;
