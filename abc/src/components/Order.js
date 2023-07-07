import React from 'react';
import './Register.css';


class Order extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserOrderForm = this.submituserOrderForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserOrderForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["address"] = "";
          this.setState({fields:fields});
          alert("Your Order placed successfully");
          alert("Congracts you earned 50 points");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["address"]) {
        formIsValid = false;
        errors[""] = "*Please enter your address.";
      }

      if (typeof fields["address"] !== "undefined") {
        if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["address"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["payment_mode"]) {
        formIsValid = false;
        errors[""] = "*Please enter your payment_mode.";
      }

      if (typeof fields["payment_mode"] !== "undefined") {
        if (!fields["payment_mode"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["payment_mode"] = "*Please enter alphabet characters only.";
        }
      }


      if (!fields["couponcode"]) {
        formIsValid = false;
        errors[""] = "*Please enter your payment_mode.";
      }

      if (typeof fields["couponcode"] !== "undefined") {
        if (!fields["couponcode"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["couponcode"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-registration-container"  style={{ 
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuUzfcA6P0CKWfZRmwLWIs23S1tTi1dpdgw&usqp=CAU")` 
    }}>
     <div id="register">
        <h3>Order page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserOrderForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>address</label>
        <input type="address" name="address" value={this.state.fields.address} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.address}</div>
        <label>Quantity</label>
        <input type="quantity" name="quantity" value={this.state.fields.quantity} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.quantity}</div>
        
        
        <a href="/payment" className="button">Order Now</a>
        </form>
    </div>
</div>

      );
  }


}


export default Order;