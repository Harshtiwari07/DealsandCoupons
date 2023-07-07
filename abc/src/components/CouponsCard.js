import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBlock,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

export default class CouponsCard extends Component {
    constructor(props) {
        super(props);
      }
      render () {
        let { id, image, heading, offer, detailsInfo } = this.props.person;
        return (

                   <div>
                   <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{width:400}}>
                        <img className="card-img mx-auto" src={image} alt="Card image" style={{width: 220,height: 220}} />
                        <div className="card-body text-center">
                            <h3 className="card-title">{heading}</h3>
                            <h4 className="card-title">{offer}</h4>
                            <p className="card-text"> {detailsInfo}</p>
                            <a href="/payment" class="btn btn-outline-primary stretched-link">Apply Coupon</a>
                        </div>
                    </div>
                    </div>
              
        )
      }
    }