import Navbar from "./Navbar";
import HeaderTop from "./HeaderTop";
import MobileMenu from "./MobileMenu";
const Header = () => {
    return ( 

    <header className="th-header header-layout15 onepage-nav">
        <MobileMenu/>
        <HeaderTop/>
        <Navbar/>
    </header>
    );
}
 
export default Header;