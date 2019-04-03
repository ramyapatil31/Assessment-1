import React, { Component } from 'react';
import Button from './button';
//import MovieList from './movies/movieList';

export default class ProductDetails extends Component {
    constructor(props){
      super(props);
     
    }
   
   

    render(){
        return(
            
            <div className="card col-md-4">
            <div className="card-body">
               <img src ={this.props.details.image_url}></img> 
               <h4 className="card-title"> {this.props.details.name}</h4>
               <p className="card-text"><strong>Description :</strong> {this.props.details.description}</p>
               <p className="card-text"><strong>Price :</strong> {this.props.details.price}</p>

            </div>
            <Button add={this.props.addCart} remov={this.props.removeCart}/>
            </div>
           
        )
    }
}