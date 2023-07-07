
import React, {Component} from 'react';
import  './Home.css';

export default class Beakery extends Component {
    render(){
        return (
   

    <div className="row"  style={{backgroundColor:"black",height:1000}}>
        <div className="col-3">
            <div className="card " style={{width: 250,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/m1.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Redmi 10 Prime: In just ₹10,499.00</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/m2.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Hyundai 109 cm:Piece in ₹22,990.00</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/m3.jpg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Lenovo IdeaPad Slim 3 Intel Celeron N4020 4th Gen 15.6" (39.62cm) HD Thin and Light Laptop:In just ₹29,374.00 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200,height: 400}}>
                <img className="card-img-top" src={require('../assets/logos/m4.jpg')} style={{width: 150,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/order" className="btn btn-outline-primary stretched-link">Buy Now</a>
                    <p className="card-line">Sennheiser HD 450SE Bluetooth 5.0 Wireless Over Ear Headphone:Specials in ₹9,012.00</p>
                </div>
            </div>
        </div>

    </div>

            
 
        )
    }
}