import React from 'react';



const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";

  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName} style={{color:"white"}}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}




class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar  navbar-expand-lg navbar-light" variant="dark" style={{backgroundColor: 'black'}}>
        <a className="navbar-brand" href="/">
         <img src={require('../assets/images/food.png')} alt="Coupons" style={{width: 100, height: 50}} />
         </a>
         
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

           
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"  >
            
          
            <NavItem path="/"  name="Home" ></NavItem> 
            <NavItem path="/coupons" name="Coupons" />
            <NavItem path="/cart" name="Cart" />
            <NavItem path="/about" name="About Us" />
            <NavItem path="/login" name="Login" />
            <NavItem path="/register" name="Register" />
           
          
          </ul>
              <form className="form-inline my-2 my-lg-0">
          
             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
             <a href="/coupons" className="button" >Search</a>
           </form>
            </div>
      </nav>
     
    )
  }
}

export default Navigation;