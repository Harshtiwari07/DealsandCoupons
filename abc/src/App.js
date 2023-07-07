import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Order from './components/Order';
import Coupons from './components/Coupons';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserComponent from './components/UserComponent';
import CouponComponent from './components/CouponComponent';
import CartComponent from './components/CartComponent';
import postfunction from './components/postfunction';
import logPost from './components/logPost';
import CouponPost from './components/CouponPost';
import Beauty from './components/Beauty';
import Beakery from './components/Beakery';
import Bevarage from './components/Bevarage';
import Food from './components/Food';
import Electronics from './components/Electronics';
import Payment from './components/Payment';

class App extends Component {
  render() {
    return (
      <Router>
     <div className="container-fluid">
     <Navigation/>
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
           <Route path="/order" component={Order} />
              <Route path="/coupons" component={Coupons} />
                 <Route path="/user" component={UserComponent} />
                 <Route path="/coupon" component={CouponComponent} />
                 <Route path="/cart" component={CartComponent} />
                 <Route path="/register" component={postfunction} />
                 <Route path="/login" component={logPost} />
                 <Route path="/couponpost" component={CouponPost} />
                 <Route path="/beauty" component={Beauty} />
                 <Route path="/beakery" component={Beakery} />
                 <Route path="/bevarage" component={Bevarage} />
                 <Route path="/food" component={Food} />
                 <Route path="/electronics" component={Electronics} />
                 <Route path="/payment" component={Payment} />

        </Switch>
     
    <Footer/>
      </div>
       </Router>
    );
  }
}

export default App;
