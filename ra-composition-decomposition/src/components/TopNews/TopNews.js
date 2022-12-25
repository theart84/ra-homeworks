import DisorderedList from "../DisorderedList/DisorderedList";
import Link from "../Link/Link";
import ListItem from "../ListItem/ListItem";
import Logo from '../Logo/Logo'
import {newsLists, newsArray, logoURL} from "../../fakeData/fakeData";

export const TopNews = () => {
  return (
    <>
      <div className="news-top-navbar">
        <DisorderedList items={newsLists} className="news-top-list news-top-list__horizontal">
          {(items) =>
            items.map((item) => (
              <ListItem key={Math.random()} className="news-top-item">
                <Link  className="news-top-link" href="/">
                  {item}
                </Link>
              </ListItem>
            ))
          }
        </DisorderedList>
      </div>
      <div className="news-top-list">
        <DisorderedList items={newsArray} className="news-top-list">
          {(items) =>
            items.map((item, index) => (
              <ListItem key={Math.random()} className="news-top-item d-flex">
                <Logo>
                  <img src={logoURL[index]} alt="" style={{width: '15px', marginRight: '10px'}}/>
                </Logo>
                <Link  className="news-top-link" href="/">
                  {item}
                </Link>
              </ListItem>
            ))
          }
        </DisorderedList>
      </div>
    </>
  );
};
