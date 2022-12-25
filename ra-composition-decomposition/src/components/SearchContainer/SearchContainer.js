import React from 'react';

/**
 * Контейнерная компонента, для формирования поисковой строки,
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const SearchContainer = (props) => (
  <div className={props.className}>{props.children}</div>
);

export default SearchContainer;
