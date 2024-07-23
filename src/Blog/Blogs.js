import BlogDetails from "./BlogDetails";
import BreadCrumbs from "../Components/BreadCrumbs";
import { useEffect } from "react";
import loadScript from "../utilites/scriptLoader";


const Blog = () => {

      
    return (
        <div>
            <BreadCrumbs title="Blogs"/>
            <BlogDetails/>
        </div>
        
    );
}
 
export default Blog;