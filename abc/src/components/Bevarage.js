
import React, {Component} from 'react';
import  './Home.css';

export default class Bevarage extends Component {
    render(){
        return (
   

    <div className="row"  style={{backgroundColor:"black",height:1000}}>
        <div className="col-3">
            <div className="card " style={{width: 250,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b13.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Drinks: Energy just Rs.89</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b14.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Drinks:Maaza in Rs.79</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b15.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Drinks:Specials Rs.199 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/bev2.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Beverage:Summer sale Rs.289</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}