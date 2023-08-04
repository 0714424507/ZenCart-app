import Search from "./Search";
import Topbar from "./Topbar";
import Navbar from "./Navbar";

function TopLayout(){
    return(
        <div>
        <Topbar/>
        <Navbar/>
        <Search/>
        </div>
    );
}
export default TopLayout;