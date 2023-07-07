import React from "react";
import "../services/UserService";
class UserComponent extends React.Component {

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
"http://localhost:8080/profile/findall")
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
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> User Management List</h1> {
				items.map((item) => (
				<ol key = { item.id } >
					<table className="table">
                      <tr >
					  <th>EmailId</th>
                      <th>FullName</th>
					  <th>MobileNo</th>			  
                      <th>Password</th>  
					  </tr>
                     <tbody>
				  
					<tr>	
					<td> { item.emailId }</td>
					<td> { item.fullName }</td>
					<td> { item.mobileNo }</td>   
                    <td> { item.password }</td>             
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

export default UserComponent;
