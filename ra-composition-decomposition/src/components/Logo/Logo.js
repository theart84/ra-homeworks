import Link from '../Link/Link'

/**
 * Настраиваемый компонент логотипа
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Logo = (props) => (
  <div
    className={props.className}
  >
    <Link className={props.linkClasses} href={props.href}>{props.children}</Link>
  </div>
);

export default Logo;
