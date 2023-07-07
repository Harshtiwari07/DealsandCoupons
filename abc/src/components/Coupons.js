import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Coupons.css';
import CouponsCard from './CouponsCard';

export default class Coupons extends Component {
    constructor() {
        super();
        this.state = {
            people: [{
                id:1,
                image: require("../assets/logos/coupon.jpg"),
                heading: "Prime Deals",
                offer: "Family meals  ",
                detailsInfo: "Min 15% off at the hottest restaurants"
        
            },
            {
                id:2,
                image: require("../assets/logos/coupon1.jpg"),
                heading: "50% OFF",
                offer: "Cakes At best offers on Orders | All users",
                detailsInfo: "Mindblowing 50% off deals in your city"
            },
            {
                id:3,
                image: require("../assets/logos/coupon2.png"),
                heading: "20% OFF on drinks",
                offer: "Flat 20% OFF On Orders | All users",
                detailsInfo: "Enjoy flat 50% off on drinks and sweets"
        
            },
            {
                id:4,
                image: require("../assets/logos/coupon3.jpg"),
                heading: "50% OFF",
                offer: "Food At best offers on Orders | All users",
                detailsInfo: "Mindblowing 50% off deals in your city"
            },
            {
                id:5,
                image:require("../assets/logos/coupon4.jpg"),
                heading: "20% OFF on drinks",
                offer: "Flat 20% OFF On Orders | All users",
                detailsInfo: "Enjoy flat 50% off on drinks and sweets"
        
            },
            {
                id:6,
                image: require("../assets/logos/coupon5.jpg"),
                heading: "Prime Deals",
                offer: "Special offer for regular users ",
                detailsInfo: "Minimum 30% off at the hottest and most premium restaurants"
        
            }
        
            ]
        }
    }

    removePerson(id) {
        this.setState({ people: this.state.people.filter(person => person.id !== id) });
    }

    render() {
        let peopleCards = this.state.people.map(person => {
            return (  
            
            
            <Col sm="4">
            <CouponsCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
          </Col>
        )
      })
      return (
        <Container fluid>
    <span>
    <h3>Coupons</h3>
  </span>
  <span>
          <h4>Amazing Coupons below</h4>
        </span>
        <Row>
            {peopleCards}
            </Row>
          
        </Container>
      )
    }
}