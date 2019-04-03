import React, { Component } from 'react';

export default class Button extends Component {
    constructor(props){
      super(props);
    }

    render(){
        return(
            <div class="container">
               <button type= "button" className="btn btn-success btn-large" onClick={()=>{
                  this.props.add()
                  }}>Add To Cart</button>
                  <button type= "button" className="btn btn-danger btn-large ml-2" onClick={()=>{
                  this.props.remov()
                  }}>Remove From Cart</button>
               </div>
        )
    }
}