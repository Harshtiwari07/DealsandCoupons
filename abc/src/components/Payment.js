import React from 'react';
import './Register.css';


class Payment extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["price"] = "";
          fields["payment_mode"] = "";
          fields["cardno"] = "";
          fields["cvv"] = "";
          this.setState({fields:fields});
          alert("Your Payment successfully completed");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["cardno"]) {
        formIsValid = false;
        errors["cardno"] = "*Please enter your cardno.";
      }

      if (typeof fields["cardno"] !== "undefined") {
        if (!fields["cardno"].match(/^[0-9]{16}$/)) {
          formIsValid = false;
          errors["cardno"] = "*Please enter valid cardno.";
        }
      }
      if (!fields["cvv"]) {
        formIsValid = false;
        errors["cvv"] = "*Please enter your cvv.";
      }

      if (typeof fields["cvv"] !== "undefined") {
        if (!fields["cvv"].match(/^[0-9]{3}$/)) {
          formIsValid = false;
          errors["cvv"] = "*Please enter valid cvv.";
        }
      }
      if (!fields["otp"]) {
        formIsValid = false;
        errors["otp"] = "*Please enter your otp.";
      }

      if (typeof fields["otp"] !== "undefined") {
        if (!fields["otp"].match(/^[0-9]{6}$/)) {
          formIsValid = false;
          errors["otp"] = "*Please enter valid otp.";
        }
      }
      if (!fields["couponcode"]) {
        formIsValid = false;
        errors["couponcode"] = "*Please enter your couponcode.";
      }

      if (typeof fields["couponcode"] !== "undefined") {
        if (!fields["couponcode"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["couponcode"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["cardHolderName"]) {
        formIsValid = false;
        errors["cardHolderName"] = "*Please enter cardHolderName.";
      }

      if (typeof fields["cardHolderName"] !== "undefined") {
        if (!fields["cardHolderName"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["cardHolderName"] = "*Please enter alphabet characters only.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }
  render() {
    return (
    <div id="main-registration-container" style={{ 
      backgroundImage: `url("https://i.pinimg.com/originals/dc/19/3e/dc193ea484188ecc9d14d6e1cb0f4992.jpg")` 
    }}>
     <div id="register">
        <h3>Payment page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

       

        
        <label for="payment_mode">Paymentmethod:</label>
        
        

     <select id="payment_mode">
                   <option value="Cash on delevary">Paypal</option>
                   <option value="DebitCard">Debit card</option>
                   <option value="CreditCard">Credit card</option>
                        <option value="netBanking">Net Banking</option>
                         </select>



        <label>couponcode</label>
        <input type="text" name="couponcode" value={this.state.fields.couponcode} onChange={this.handleChange} />

        <div className="errorMsg">{this.state.errors.couponcode}</div>
          

        <label>CardHolder Name</label>
        <input type="text" name="cardHolderName" value={this.state.fields.cardHolderName} onChange={this.handleChange} />

        <div className="errorMsg">{this.state.errors.cardHolderName}</div>
        
        
        <label>Card No:</label>
        <input type="text" name="cardno" value={this.state.fields.cardno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.cardno}</div>
        <label>cvv</label>
        <input type="cvv" name="cvv" value={this.state.fields.cvv} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.cvv}</div>
        <label>OTP</label>
        <input type="otp" name="otp" value={this.state.fields.otp} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.otp}</div>
        <input type="submit" className="button"  value="Pay Now" ></input>
        
        
        </form>
    </div>
</div>

      );
  }


}





export default Payment;