import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props){
      super();
    }
  
    render(){
        return(
            <div>
            
            <nav class="navbar navbar-expand-sm bg-primary">
            <h4>Shopping Cart</h4>
              <span> <label className="badge">Items in Cart: {this.props.count}</label></span>
               
                
             
            </nav>
              
              
            </div>
        )
    }
}