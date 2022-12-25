import "./App.css";
import {TopNews} from "./components/TopNews/TopNews";
import Currency from "./components/Currency/Currency";
import Search from "./components/Search/Search";
import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import Service from "./components/Service/Service";
import AdsBanner from "./components/AdsBanner/AdsBanner";

function App() {
  return (
    <div className="wrapper">
      <TopNews/>
      <Currency/>
      <Service/>
      <Search/>
      <AdsBanner href="/" imageURL="https://i.imgur.com/pArPD6N.png" imageClasses="image" bannerClasses="banner-container"/>
      <WidgetContainer/>
    </div>
  );
}

export default App;
