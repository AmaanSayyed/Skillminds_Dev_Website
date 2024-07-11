import { Link } from "react-router-dom";
const Navbar = () => {
  
  return (
    <div className="sticky-wrapper tw-shadow-md">
            <div className="menu-area tw-bg-white">
                <div className="container th-container4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="header-logo">
                                <a  href="index.html"><span data-mask-src="assets/img/skillminds_logo.png" ></span><img src="assets/img/skillminds_logo.png" alt="Webteck" style={{width:'12rem'}}/></a>
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav className="main-menu style2 d-none d-lg-inline-block">
                                <ul>
                                    <li className="menu-item-has-children mega-menu-wrap">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li><Link to="/#about-sec">About Us</Link></li>
                                    <li><Link to="/#service-sec">Services</Link></li>
                                    <li><Link to="/#project-sec">Gallery</Link></li>
                                    <li><Link to="/blogs">Blog</Link></li>
                                    <li><Link to="/#contact-sec">Contact Us</Link></li>

                                </ul>
                            </nav>
                            <button type="button" className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
                        </div>
                        <div className="col-auto d-xl-block d-none">
                            <div className="header-button">
                                <a href="tel:+2586232325" className="th-btn style-radius">Call us: +91-9322825631</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
 
export default Navbar;