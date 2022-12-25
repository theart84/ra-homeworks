import {useState} from "react";
import CardView from "../CardView/CardView";
import ListView from "../ListView/ListView";
import fakeData from "../../fakeData/fakeData";
import classes from './Store.module.css';
import IconSwitch from "../IconSwitch/IconSwitch";

const Store = () => {
  const products = fakeData;
  const [isListView, setIsListView] = useState(false);

  const onSwitchListHandler = () => {
    setIsListView(!isListView)
  }

  return (
    <div className={classes.container}>
      <IconSwitch icon={isListView ? 'view_module' : 'view_list'} onSwitch={onSwitchListHandler} />
      {isListView ? <ListView products={products}/> : <CardView products={products}/>}
    </div>
  )
}

export default Store;
