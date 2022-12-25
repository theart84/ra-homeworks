/**
 * Настраиваемый компонент ссылки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Link = (props) => {
  return (
    <a className={props.className} href={props.href}>
      {props.children}
    </a>
  );
};

export default Link;
