import Header from "src/layouts/main/header";
import ElearningTeamAbout from "src/sections/_elearning/team/elearning-team-about";
import { _members } from "src/_mock";
import Footer from "src/layouts/main/footer";
import AboutHero2 from "./AboutHero2";
import AboutHero from "./AboutHero";


export default function AboutView(){
    return(
        <>
        <Header/>
        <AboutHero/>
        <AboutHero2/>
        <ElearningTeamAbout members={_members}/>
        <Footer/>
        </>
    )
}