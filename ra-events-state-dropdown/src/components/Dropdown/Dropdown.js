import {useState} from "react";

import DropdownList from "./DropdownList/DropdownList";

import classes from './Dropdown.module.css';
import useDelayUnmount from "../../hooks/useDelayUnmount";


const Dropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const mountedStyle = {opacity: 1, transition: "opacity 500ms ease-in"};
  const unmountedStyle = {opacity: 0, transition: "opacity 500ms ease-in"};
  const shouldRenderChild = useDelayUnmount(isShow, 600);
  const showMenuHandler = () => {
    setIsShow(!isShow);
  }

  return (
    <div className={classes['dropdown-wrapper']}>
      <div onClick={showMenuHandler} className={classes['dropdown-button']}>Account setting</div>
      {shouldRenderChild && <DropdownList style={isShow ?  mountedStyle : unmountedStyle}/>}
    </div>
  )
}

export default Dropdown;
