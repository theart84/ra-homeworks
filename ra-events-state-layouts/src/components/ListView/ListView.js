import classes from './ListView.module.css';
import ShopItem from "./ShopItem/ShopItem";
const ListView = (props) => {
 return (
   <div className={classes['card-container']}>
    {props.products.map(product =>
      <ShopItem
        key={Math.random()}
        product={product}
      />)}
   </div>
 )
}

export default ListView;
