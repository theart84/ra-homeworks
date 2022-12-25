import ListItem from "../ListItem/ListItem";
import Link from "../Link/Link";

/**
 * Настраиваемый компонент списка
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const DisorderedList = (props) => (
  <ul className={props.className}>{props.children(props.items)}</ul>
);

export default DisorderedList;
