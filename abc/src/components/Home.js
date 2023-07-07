import React, {Component} from 'react';
import  './Home.css';

export default class Home extends Component {
    render(){
        return (
      
    <div className="container-fluid">

    <div className="row">
        <div className="col">
            <div className="main">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 200}}>
              
                            <a href="/order">
                            <img className="card-img-top" src={require('../assets/logos/b1.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                                <p className="card-text"><span className="name12">Beauty: Products</span></p>
                                <a href="/beauty" className="btn btn-outline-primary stretched-link">View Products</a>  
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light"style={{width: 200}} >
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b2.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Beakery: items</span></p>
                                <a href="/beakery" className="btn btn-outline-primary stretched-link">View food items</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light"style={{width: 200}} >
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/E1.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Electronics: items</span></p>
                                <a href="/electronics" className="btn btn-outline-primary stretched-link">View Electronics items</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 200}}>
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b4.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Bevarage: drinks</span></p>
                                <a href="/bevarage" className="btn btn-outline-primary stretched-link">View Drinks</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card bg-light" style={{width: 200}}>
                            <a href="/order"><img className="card-img-top" src={require('../assets/logos/b5.jpg')} alt="Card image cap" />
                            </a>
                            <div className="card-body">
                            
                                <p className="card-text"><span className="name12">Food</span></p>
                                <a href="/food" className="btn btn-outline-primary stretched-link">View Dishes</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col">
            <div className="line">
                <span>Latest offers, Best deals</span>
            </div>
        </div>
    </div>

    <div className="row">

        <div className="col-3">
            <div className="card " style={{width: 250}}>
                <img className="card-img-top" src={require('../assets/logos/food2.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-line">Food: In just Rs.99</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card " style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/food1.jpg')} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text"></p>
                    <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-line">Food:Egg in Rs.79</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/beauty1.jpeg')} alt="Card image cap" />
                <div className="card-body">
                <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-text">beauty:package Rs.899 </p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/bev2.jpg')} style={{width: 200,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-text">Beverage:Summer sale Rs.289</p>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card" style={{width: 200}}>
                <img className="card-img-top" src={require('../assets/logos/m5.jpg')} style={{width: 200,height: 150}} alt="Card image cap" />
                <div className="card-body">
                <a href="/cart" className="btn btn-outline-primary stretched-link">Add to Cart</a>
                    <p className="card-text">Philips BT3241/15 Smart Beard Trimmer:Summer sale ₹2,249.00</p>
                </div>
            </div>
        </div>

    </div>
</div>
            
 
        )
    }
}