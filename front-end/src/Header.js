import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
    <div class="head"><div class="logo"><img id="logo" src="/images/osmosis_logo.png"></img></div>
    <div class="menuicon"><img id="menuicon" src="/images/menuicon.png"></img></div> 
        <div class="headnav ">
            
        <ul class="nav justify-content-end ">
        
        <li class="searchicon"><img id="searchicon" src="/images/searchicon.jpg"></img></li>  
  <li class="nav-item navbar-nav mr-auto">
    <a class="nav-link active" href="#">Explore</a>
  </li>
  <li class="nav-item navbar-nav mr-auto">
    <a class="nav-link" href="#">Create</a>
  </li>
  <li class="nav-item navbar-nav mr-auto">
    <a class="nav-link" href="#">Events</a>
  </li>
  <li class="nav-item navbar-nav mr-auto">
    <a class="nav-link" > Log In </a>
    {/* <Link to="/login">Log In </Link> */}
  </li>
  <li class="nav-item navbar-nav mr-auto">
    <a class="nav-link" href="#">Sign Up</a>
  </li>
  
</ul>
    </div>
    </div>
    <hr/>
    </>



    ); 
}

export default Header;