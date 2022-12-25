import PropTypes from 'prop-types';

import classes from './ImageList.module.css';

const ImageList = (props) => <div className={classes.container}>{props.children(props.images)}</div>


ImageList.propTypes = {
  children: PropTypes.func.isRequired
}


export default ImageList;
