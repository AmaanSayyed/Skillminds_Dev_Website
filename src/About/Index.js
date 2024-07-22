import BreadCrumbs from "../Components/BreadCrumbs";
import Content from "./Content";
import Feature from "./Feature";
import MissionVision from "./MissionVision";


const Index = () => {
    return (
        <div>
             <BreadCrumbs title={"About"}/>
             <Content/>
             <MissionVision/>
             <Feature/>
        </div>
       
    );
}
 
export default Index;