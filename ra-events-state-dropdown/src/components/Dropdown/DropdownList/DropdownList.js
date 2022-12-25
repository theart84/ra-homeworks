import {useState} from "react";

import classes from './DropdownList.module.css';
import DropdownListItem from "./DropdownListItem/DropdownListItem";

const SETTING_ITEMS = [
  {
    id: 'sI1',
    title: 'Profile Information'
  },
  {
    id: 'sI2',
    title: 'Change Password'
  },
  {
    id: 'sI3',
    title: 'Become PRO'
  },
  {
    id: 'sI4',
    title: 'Help'
  },
  {
    id: 'sI5',
    title: 'Log out'
  }
]

const DropdownList = (props) => {
  const [settingItems, setSettingItems] = useState(SETTING_ITEMS);
  const [activeElement, setActiveElement] = useState('sI1');

  const changeActiveElementHandler = (event, id) => {
    event.preventDefault();
    setActiveElement(id);
  }

  return (
    <ul className={classes.menu} style={props.style}>
      {settingItems.map(item =>
        <DropdownListItem
          activeElement={activeElement}
          key={Math.random()}
          title={item.title}
          id={item.id}
          changeActiveElement={changeActiveElementHandler}
        />
      )}
    </ul>
  )
};

export default DropdownList;
