import React,{Component} from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import Highlights from './components/Highlights';
import VenueNFO from './components/venueNFO';
import Location from './components/Location';
class App extends Component{
render() {
  return (
    <div className="App" style={{background:'cornflowerblue'}}>
     <Header/>
     <Featured/>
     <VenueNFO/>
     <Highlights/>
     <Location/>
    </div>
  );
}
}
export default App;
