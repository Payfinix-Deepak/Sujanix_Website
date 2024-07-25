import { Container, Typography } from "@mui/material";

import Header from "src/layouts/main/header";
import Footer from "src/layouts/main/footer";

import PlayerView from "src/sections/examples/player-view";
import MarketingLandingFreeSEO from "src/sections/_marketing/landing/marketing-landing-free-seo";

import CruxSol from "./CruxSol";
import CruxHero from "./CruxHero";
import CruxFeau from "./CruxFeau";
import CruxFaqs from "./CruxFaqs";
import CSection1 from "./CSection1";
import CSection2 from "./CSection2";


export default function CruxView() {


  return (
    <>
      <Header />
      <CruxHero/>
      <CSection1/>
      <CSection2/>
      <PlayerView/>
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Crux UEM Features
        </Typography>
      </Container>
      <CruxFeau/>
      <CruxSol/>
      <CruxFaqs/>
      <MarketingLandingFreeSEO/>
      <Footer/>


      
    </>
  );
}
