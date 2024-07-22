import BreadCrumbs from "../Components/BreadCrumbs";
import useMask from "../Hooks/useMask";
import ContactHead from "./ContactHead";
import Form from "./Form";

const Index = () => {
    useMask();
    return (
        <div>
            <BreadCrumbs title="Contact Us"/>
            <ContactHead/>
            <Form/>
        </div>
        
    );
}
 
export default Index;