import { Link } from "react-router-dom";
import Search from "./Search";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import img1 from "./images/img1.png";

function TopLayout(){
  return(
        <div>
            <Topbar/>

            <div className='container1'>
            {/* Logo */}
            <a href= '/'><img src={img1} alt="Logo" /></a>
            <div className='cart'>
          <Link className="navbar-link" to="/cart">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </div>
      </div>
        
        <Navbar/>
        <Search/>
        </div>
    );
}
export default TopLayout;

