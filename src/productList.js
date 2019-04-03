import React, { Component } from 'react';
import ProductDetails from './productDetails';



export default class ProductList extends Component {
    constructor(props){
      super(props);
      this.state = {
        products:[{"name":"Ride-On Car Truck w/ Parent Control, 3 Speeds, LED Headlights", "price":"119.99", "description":"Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes. ", "image_url":"https://i5.walmartimages.com/asr/200d8ddc-3172-4c57-a66d-d129b0d362a9_1.e2971cf5435ea36dbfd2b2724337039e.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"},
                {"name":"Disney/Pixar Cars 3 Lightning McQueen 20-Inch Vehicle", "price":"9.99", "description":" Disney/Pixar Cars fans get big action with this 20&quot; Lightning McQueen vehicle! The favorite leading character features iconic colors, race styling ", "image_url":"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff"},
                {"name":"Hot Wheels 9-Car Gift Pack Collection (Styles May Vary)", "price":"9.47", "description":"Help expand your little one's toy collection with the Hot Wheels 9-Pack Cars set. Whether your boy is adding to his arsenal or just starting to build his own,", "image_url":"https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF"}]
         }
       }

    render(){
      let listOfProductsDisplayed = '';
      if(this.props.search == ''){
          listOfProductsDisplayed = this.state.products.map((item, index)=>{
              return <ProductDetails addCart={this.props.count} removeCart={this.props.subcount} key={index} details = {item}/>
          })
      }
      else{
          let filterProducts = this.state.products.filter((item, index)=>{
              return item.name.toLowerCase().includes(this.props.search.toLowerCase())
          });
          listOfProductsDisplayed = filterProducts.map((item, index)=>{
              return <ProductDetails addCart={this.props.count} removeCart={this.props.subcount} key={index} details = {item}/>
          })
      }
        
        return(
            
            <div className="row">
              
                {listOfProductsDisplayed} 
              
            </div>
            
        )
    }
}