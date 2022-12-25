import React from 'react';
import {serializeData, sortedData} from "../../utils/utils";

const withSortTable = (Component, type) => {
  const HOCComponent = (props) => {
    const sortData = sortedData(props.list);
    const normalizeData = serializeData(sortData, type);
    return <Component {...props} list={normalizeData}/>
  }
  HOCComponent.displayName = 'withSortTableHOC';
  return HOCComponent;
};

export default withSortTable;
