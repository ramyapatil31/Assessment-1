import React, { Component } from 'react';
import './App.css';
import ProductList from './productList';
import Search from './search';
import Navbar from './navbar';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery : '', counter : 0
    }
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.removeCount = this.removeCount.bind(this);
    
  }
 
  handleAdd(data){
    console.log(data);
    let currentState = this.state;
    currentState.counter++;
    this.setState(currentState);
  }
  removeCount(){
    let currentState = this.state;
    if(currentState.counter == 0){
      this.setState(currentState);
    }
    else{
      currentState.counter--;
      this.setState(currentState);
    }
  }
  
  handleSearchText(data){
    console.log(data);
    let currentState = this.state;
    currentState.searchQuery = data;
    this.setState(currentState);
  }
  render() {
    return (
      <div className="container">
       <Navbar count={this.state.counter}/>
       <Search searchText={this.handleSearchText}></Search>
       <ProductList search={this.state.searchQuery} count={this.handleAdd} subcount={this.removeCount}/>
      </div>
    );
  }
}

export default App;
