import React from "react";

class CartComponent extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://localhost:8082/cart/findall")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1>Cart Items</h1> {
				items.map((item) => (
				<ol key = { item.id } >


                    <table className="table">
                       <tr>
						 <th>CartId</th>
						 <th>UserId</th>
						 <th>Quantity</th>
						 <th> CouponId</th>
						 <th> Price</th>
					   </tr>
                      <tbody>
                      <tr>
					    <td> { item.cartId }</td>
					    <td> { item.userId }</td>
				        <td>{ item.quantity }</td>
                        <td>{ item.couponId }</td>
                        <td>{ item.price }</td>
					 </tr>
					 </tbody>
					</table>
				</ol>


				))
			}
		</div>
	);
 }



}

export default CartComponent;
