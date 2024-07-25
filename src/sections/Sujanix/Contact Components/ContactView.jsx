import Footer from "src/layouts/main/footer";
import Header from "src/layouts/main/header";

import MarketingContactView from "src/sections/_marketing/view/marketing-contact-view";
import ElearningContactInfo from "src/sections/_elearning/contact/elearning-contact-info";

export default function ContactView(){
    return(
        <>
        <Header/>
        <MarketingContactView/>
        <ElearningContactInfo/>
        <Footer/>
        </>
    )
}