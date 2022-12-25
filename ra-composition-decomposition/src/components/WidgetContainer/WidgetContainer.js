import React from 'react';
import Widget from "../Widget/Widget";
import {logoURL, words} from "../../fakeData/fakeData";
import DisorderedList from "../DisorderedList/DisorderedList";
import Link from "../Link/Link";
import ListItem from "../ListItem/ListItem";
import Logo from "../Logo/Logo";

const WidgetContainer = (props) => (
  <div className="widget-container">
    <Widget title="Погода">
      <div>
        <img style={{maxWidth: '100%'}} src="https://i.imgur.com/KAbznzl.png" alt="weather"/>
      </div>
    </Widget>
    <Widget title="Карта России">Расписания</Widget>
    <Widget title="Посещаемое" items={words}>
      <DisorderedList items={words} className="visited-list">
        {items => items.map(item => (
          <ListItem key={Math.random()} className="news-top-item">
            <Link className="news-top-link" href="/">
              {item}
            </Link>
          </ListItem>
        ))}
      </DisorderedList>
    </Widget>
    <Widget title="Телепрограмма">
      <p>18:40 На самом деле.</p>
      <p>19:45 Пусть говорят.</p>
      <p>21:00 Время</p>
      <p>21:30 "Старушки в бегах".</p>
      <p>23:35 Вечерний Ургант.</p>
    </Widget>
    <Widget title="Эфир">
      <p>18:40 На самом деле.</p>
      <p>19:45 Пусть говорят.</p>
      <p>21:00 Время</p>
    </Widget>


  </div>
);

export default WidgetContainer;
