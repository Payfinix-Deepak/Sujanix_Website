import { _members } from "src/_mock";
import Header from "src/layouts/main/header";
import Footer from "src/layouts/main/footer";

import ElearningTeamAbout from "src/sections/_elearning/team/elearning-team-about";
import TravelAboutOurVision from "src/sections/_travel/about/travel-about-our-mission";

import AboutHero from "./AboutHero";
import AboutHero2 from "./AboutHero2";


export default function AboutView(){
    return(
        <>
        <Header/>
        <AboutHero/>
        <AboutHero2/>
        <TravelAboutOurVision/>
        <ElearningTeamAbout members={_members}/>
        <Footer/>
        </>
    )
}