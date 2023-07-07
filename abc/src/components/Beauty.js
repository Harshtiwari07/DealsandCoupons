
import React, {Component} from 'react';
import  './Home.css';

export default class Beauty extends Component {
    render(){
        return (
   

    <div className="row" style={{backgroundColor:"black",height:1000}}>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/b6.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Lipstick: In just Rs.99</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/b7.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Perfume: In just Rs.379</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/beauty1.jpeg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">beauty:package  Rs.899 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/b8.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Face cream:In just Rs.289</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}