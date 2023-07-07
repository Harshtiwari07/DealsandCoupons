
import React, {Component} from 'react';
import  './Home.css';

export default class Beakery extends Component {
    render(){
        return (
   

    <div className="row"  style={{backgroundColor:"black",height:1000}}>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b9.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Food: In just Rs.99</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b10.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Food:Piece in Rs.79</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 300 }}>
                <img className="card-img-top" src={require('../assets/logos/b11.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">cake:In just Rs.999 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 300}}>
                <img className="card-img-top" src={require('../assets/logos/b12.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-text">Food:Specials in Rs.99</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}