import classes from './Button.module.css';

const Button = (props) => <button className={classes.button} onClick={props.onClick}>{props.title}</button>;

export default Button;
