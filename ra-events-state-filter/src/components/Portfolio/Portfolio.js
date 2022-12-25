import {Component, useState} from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import fakeData from '../../FakeData/sourceImage';

import classes from './Porfolio.module.css';

const filters = ["All", "Websites", "Flayers", "Business Cards"];
const imageData = fakeData;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'All',
      filteredImage: imageData
    }
    this.onSelectFilterHandler = this.onSelectFilterHandler.bind(this);
  }

  onSelectFilterHandler(event) {
    const filter = event.target.textContent;
    let filteredImage;
    if (filter === 'All') {
      filteredImage = imageData;
    } else {
      filteredImage = imageData.filter(image => image.category === filter)
    }
    this.setState({filteredImage, currentFilter: filter})
  }


  render() {
    return (
      <div className={classes.container}>
        <Toolbar
          filters={filters}
          selected={this.state.currentFilter}
          onSelectFilter={this.onSelectFilterHandler}
        />
        <ProjectList images={this.state.filteredImage}/>
      </div>
    )
  }

}

// const Portfolio = () => {
//   const [currentFilter, setCurrentFilter] = useState('All');
//   const [filteredImage, setFilteredImage] = useState(fakeData);
//
//
//   const onSelectFilterHandler = (event) => {
//     const filter = event.target.textContent;
//     if (filter === 'All') {
//       setFilteredImage(imageData)
//     } else {
//       const filteredImage = imageData.filter(image => image.category === filter)
//       setFilteredImage(filteredImage);
//     }
//     setCurrentFilter(filter);
//   }
//
//   return (
//     <div className={classes.container}>
//       <Toolbar
//         filters={filters}
//         selected={currentFilter}
//         onSelectFilter={onSelectFilterHandler}
//       />
//       <ProjectList images={filteredImage}/>
//     </div>
//   )
// }

export default Portfolio;
