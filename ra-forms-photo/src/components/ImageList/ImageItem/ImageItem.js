import classes from './ImageItem.module.css';
import {useRef} from "react";
import PropTypes from 'prop-types';


const ImageItem = (props) => {
  const ref = useRef();
  const onClickHandler = () => {
    const {id} = ref.current.dataset;
    props.deleteImage(id)
  }

  return (
    <div ref={ref} className={classes.container} data-id={props.image.id}>
      <div className={classes['image-box']}>
        <img
          src={props.image.url}
          alt="userPic"
          className={classes['image-item']}
        />
      </div>
      <button
        className={classes['btn-delete']}
        onClick={onClickHandler}
      >
        x
      </button>
    </div>
  )
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  deleteImage: PropTypes.func.isRequired
}

export default ImageItem
