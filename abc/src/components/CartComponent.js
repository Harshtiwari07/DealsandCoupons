import React from "react";

class CartComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8082/cartItems/allOrders")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
      .catch((error) => {
        console.error("Error occurred during fetch:", error);
        // Handle the error, show an error message, or retry the request
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div><h1>Please wait some time....</h1></div>;

    return (
      <div className="App">
        <h1>Cart Items</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Coupon ID</th>
              <th>Coupon Name</th>
              <th>Coupon Description</th>
              <th>Coupon Price</th>
              <th>Coupon Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.orderId}>
                <td>{item.orderId}</td>
                <td>{item.couponId}</td>
                <td>{item.coupons_name}</td>
                <td>{item.coupons_desc}</td>
                <td>{item.coupons_price}</td>
                <td>{item.coupons_qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CartComponent;
