import React from 'react';
import {currency} from "../../fakeData/fakeData";
import ListItem from "../ListItem/ListItem";
import Link from "../Link/Link";
import DisorderedList from "../DisorderedList/DisorderedList";

const Currency = (props) => (
  <DisorderedList items={currency} className="currency-list currency-list__horizontal">
    {(items) =>
      items.map((item) => (
        <ListItem key={Math.random()} className="currency-item">
          <div>
            <Link  className="currency-link" link="/">
              <span className="currency-desc currency-desc__currency">{item.currency}</span>
            </Link>
            <span className="currency-desc currency-desc__price"
            >
              {item.price}
            </span>
          </div>
        </ListItem>
      ))
    }
  </DisorderedList>
);

export default Currency;
