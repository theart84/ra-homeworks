import React from 'react';
import {dataURL} from './constants/constants'
import MonthTable from "./components/MonthTable/MonthTable";
import SortTable from "./components/SortTable/SortTable";
import YearTable from "./components/YearTable/YearTable";
import withSortTable from "./components/withSortTable/withSortTable";

export default class App extends React.Component {
  state = {
    list: []
  };

  async componentDidMount() {
    const fetchData = async () => {
      const response = await fetch(dataURL)
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const json = await response.json()
      return json;
    }
    try {
      const data = await fetchData()
      this.setState(prev => ({
        list: [...prev.list, ...data.list]
      }))
    } catch (e) {
      console.log(e.message)
    }
  }

  render() {
    const {list} = this.state;
    return (
      <div id="app">
        <MonthHOC list={list}/>
        <YearHOC list={list}/>
        <SortTable list={list}/>
      </div>
    );
  }
}

const MonthHOC = withSortTable(MonthTable, 'month');
const YearHOC = withSortTable(YearTable, 'year');
