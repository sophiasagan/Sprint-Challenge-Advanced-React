import React from "react";
import "./App.css";
import axios from "axios";
import PlayerData from "./components/PlayerData";
import Navbar from "./components/Navbar";
import PlayerChart from "./components/PlayerChart"



class App extends React.Component {
  state = {
    APICall: []
  };
  
  componentDidMount() {

    axios 
    .get(`http://localhost:5000/api/players`)
    .then(res => {
      this.setState({
        APICall: res.data
      });
      console.log("API data", this.state.APICall)
    })
    .catch(err => console.log(err));
  }
  
  
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>2019 Women's World Cup Players</h1>
          <h4>*Based on total Google searches</h4>
        <PlayerData data={this.state.APICall}/>
        <PlayerChart />
      </div>
    );
  }
}
export default App;