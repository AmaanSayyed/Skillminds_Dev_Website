import './index.css'
<<<<<<< HEAD
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
=======
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
>>>>>>> b333cdcc7400f5f1db9c1f1cb3dc92554f0d0c70
import Header from './Header/Header';
import Home from './Home/Home';
import ScrollTop from './utilites/ScrollTop';
import Blog from './Blog/Blogs';
import ScrollTo from './utilites/ScrollTo';
import ScrollToTop from './utilites/ScrollToTop';
import About from './About/Index';
import OurTeam from './OurTeam/Index';
import Jobs from './JoinUs/Index';
import Training from './Training/Index';
import Footer from './Footer/Footer';
import SmoothScroll from './utilites/SmoothScroll';
import Contact from './Contact/Index';

const App=()=> {
  
  
  return (
    <Router>
    <div className="App">
     
      <ScrollToTop/>
      <ScrollTo/>
      <Header/>
      <SmoothScroll/>
      <ScrollTop />

      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/blogs">
          <Blog/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/ourteam">
          <OurTeam/>
        </Route>
        <Route exact path="/jobs">
          <Jobs/>
        </Route>
        <Route exact path="/training">
          <Training/>
        </Route>
        <Route exact path="/contact-us">
          <Contact/>
        </Route>

        
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
