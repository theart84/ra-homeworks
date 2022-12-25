import classes from './FilmItem.module.css';
import StartList from "./StartList/StartList";

const FilmItem = (props) => {
  return (
    <div className={classes['film-container']}>
      <div className={classes['img-wrapper']}>
        <img className={classes['img-item']} src={props.src} alt="img"/>
        <div className={classes.genre}>{props.genre}</div>
      </div>
      <div>
        <div className={classes['film-body']}>
          <h2 className={classes['film-title']}>{props.title}</h2>
          <div className={classes['film-rating']}>
            <StartList count={props.rating}/>
          </div>
          <div className={classes['film-service']}>
            <div className={classes.buy}>Buy {props.price.toFixed(2)}$</div>
            <div className={classes.more}>More...</div>
          </div>
        </div>
      </div>
      <div className={classes['film-reactions']}>
        <div className={classes.like}></div>
        <div className={classes.share}></div>
      </div>
    </div>
  );
}

export default FilmItem;
