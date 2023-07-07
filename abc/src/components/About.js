import React, {Component} from 'react';
import  './About.css';
export default class About extends Component {
    render(){
        return (
         <div className="container-fluid">
    <div className="row">
        <div className="col">
            <div className="card text-center" style={{width: 1000}}>
                {/* <img className="card-img-top" src={require('../assets/logos/24.jpg')} alt="Card image" /> */}
                <div className="card-img-overlay">
                    <div className="card-body" style={{color: 'black'}}>
                        <h4 className="card-title">Best Deals and Coupons site</h4>
                        <h5>People who love to grab the best deals and coupons, this is best place to enjoy your day.</h5>
                        <p className="card-text"></p>
                        <p className="card-text">An independent platform and productive service that aims to provide you best quality of food,bekary,bevarage, beauty and last minute cleaners with some coupons referral</p>
                        <p className="card-text">While we are independent, we may receive compensation from our partners for featured placement of their products or services.We may also receive compensation if you click on certain links posted on our site. </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}