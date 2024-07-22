import BlogDetails from "./BlogDetails";
import BreadCrumbs from "../Components/BreadCrumbs";
import { useEffect } from "react";
import loadScript from "../utilites/scriptLoader";

const scriptsToLoad= [
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
  const unloadScripts = (scripts) => {
    scripts.forEach(src => {
      const script = document.querySelector(`script[src="${src}"]`);
      if (script) {
        document.body.removeChild(script);
        console.log(`Script ${src} removed.`);
      }
    });
  };
const Blog = () => {

      // useEffect(() => {
      //   console.log('Blog component mounted');
        
      //   const loadHomeScripts = async () => {
      //     await loadScript(scriptsToLoad);
      //     console.log('Blog scripts loaded');
      //   };
    
      //   loadHomeScripts();
    
      //   return () => {
      //     console.log('Blog component unmounted');
      //     unloadScripts(scriptsToLoad);

      //   };
      // }, []);
      
    return (
        <div>
            <BreadCrumbs title="Blogs"/>
            <BlogDetails/>
        </div>
        
    );
}
 
export default Blog;