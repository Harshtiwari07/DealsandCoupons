import React from "react";

class CouponComponent extends React.Component {

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
"http://localhost:8081/coupon/findall")
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
			<h1>Coupon List</h1> {
				items.map((item) => (
				<ol key = { item.id } >


					<table className="table">
                     <tr>
						 <th>CouponId</th>
						 <th>Category:</th>
						 <th>Count</th>
						 <th> Offer</th>
						 <th> CompanyName</th>
					 </tr>
                      <tbody>
                      <tr>
					<td> { item.couponId },</td>
					<td> { item.category },</td>
				     <td>{ item.count },</td>
                     <td>{ item.offer },</td>
                     <td>{ item.companyName }</td>
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

export default CouponComponent;
