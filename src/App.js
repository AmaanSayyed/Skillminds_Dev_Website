import React, { useEffect } from 'react';
import './index.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import ScrollTop from './ScrollTop';
import Brand from './Brand';
import Service from './Service';
import About from './About/About';
import Process from './About/Process';
import Blog from './Blog/Blogs';
import ScrollTo from './ScrollTo';


function App() {
  useEffect(() => {
    const loadScripts = async () => {
      const scripts = [
        'assets/js/vendor/jquery-3.7.1.min.js',
        'assets/js/swiper-bundle.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/jquery.counterup.min.js',
        'assets/js/circle-progress.js',
        'assets/js/jquery-ui.min.js',
        'assets/js/imagesloaded.pkgd.min.js',
        'assets/js/isotope.pkgd.min.js',
        'assets/js/tilt.jquery.min.js',
        'assets/js/gsap.min.js',
        'assets/js/ScrollTrigger.min.js',
        'assets/js/smooth-scroll.js',
        'assets/js/particles.min.js',
        'assets/js/particles-config.js',
        'assets/js/main.js'
      ];

      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

      for (let i = 0; i < scripts.length; i++) {
        const src = scripts[i];
        if (!document.querySelector(`script[src="${src}"]`)) {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => {
            console.log(`Script ${src} loaded.`);
          };
          document.body.appendChild(script);
          await delay(10); // Adjust delay time (in milliseconds) as needed
        }
      }
    };

    // Load scripts after initial render
    loadScripts();

    // Clean up scripts on component unmount
    return () => {
      const scripts = [
        'assets/js/vendor/jquery-3.7.1.min.js',
        'assets/js/swiper-bundle.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/jquery.magnific-popup.min.js',
        'assets/js/jquery.counterup.min.js',
        'assets/js/circle-progress.js',
        'assets/js/jquery-ui.min.js',
        'assets/js/imagesloaded.pkgd.min.js',
        'assets/js/isotope.pkgd.min.js',
        'assets/js/tilt.jquery.min.js',
        'assets/js/gsap.min.js',
        'assets/js/ScrollTrigger.min.js',
        'assets/js/smooth-scroll.js',
        'assets/js/particles.min.js',
        'assets/js/particles-config.js',
        'assets/js/main.js'
      ];

      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
          console.log(`Script ${src} removed.`);
        }
      });
    };

  }, []); // Empty dependency array means it runs once after initial render

  
  return (
    <Router>
      <ScrollTo/>
    <div className="App">
      <div className="cursor"></div>
      <div className="cursor2"></div>
      <Header/>
      
      <ScrollTop />
      <Switch>
        <Route exact path="/">
          <Home />
          <Brand/>
          <Service/>
          <About/>
          <Process/>
        </Route>
        <Route exact path="/blogs">
          <Blog/>
        </Route>
        
        <Route path="*" component={() => <h1>Page Not Found</h1>} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
