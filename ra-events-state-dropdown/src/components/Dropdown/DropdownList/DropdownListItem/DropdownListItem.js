import classes from './DropdownListItem.module.css';

const DropdownListItem = (props) => {
  const style = {
    color: props.activeElement === props.id ? '#507cfb': '',
  }
  return (
    <li
      style={style}
      className={classes['menu-item']}
      data-id={props.id}
    >
    <a
      className={classes['menu-link']}
      href="http://ya.ru"
      onClick={(event) => props.changeActiveElement(event, props.id)}
    >
      {props.title}
    </a>
    </li>
  )
}


export default DropdownListItem;
