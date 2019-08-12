import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoreButton from "./components/MoreButton"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  componentDidMount(){
    fetch(API)
    .then(response=> response.json())
    .then((data) => {this.setState({sushiData: data})})
  }

  state = {
    sushiData: [],
    money: 100,
    eaten: [],
    index: 0
   
  }

  handleMoreButton = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  getSushis = () => {
    return this.state.sushiData.slice(this.state.index, this.state.index+4)
  }

  sendSushi = (sushi) => {
    if (this.state.money - sushi.price < 0) {
      window.alert("You don't have enough money. Please leave the restaurant.")
      return null 
    }
    else {
   this.setState({eaten: [...this.state.eaten, sushi.id]})
   this.setState({money: this.state.money - sushi.price})
    }
  }

  
  render() {

    return (
      <div className="app">
        <SushiContainer  handleMoreButton={this.handleMoreButton} money={this.state.money} eaten={this.state.eaten} sendSushi={this.sendSushi} sushi={this.getSushis()}/>
        <Table eaten={this.state.eaten} money={this.state.money}/>
       
      </div>
    );
  }
}

export default App;