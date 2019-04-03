import React, { Component } from 'react';

export default class Search extends Component {
    constructor(){
      super();
    }

    render(){
        return(
            <div className="row mb-4 mt-2 justify-content-center">
            <div className="col-sm-8">
              <input type="text" placeholder="Search" className="form-control" onChange={(e)=>{
                  this.props.searchText(e.target.value)
                  }}></input>
                  </div>
              <button className=" btn btn-primary" onClick={()=>{
                  this.props.search("Clicked")
                  }}>Search</button>
            </div>
        )
    }
}