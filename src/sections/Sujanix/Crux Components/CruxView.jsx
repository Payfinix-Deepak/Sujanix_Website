import Header from "src/layouts/main/header";
import { Container, Typography } from "@mui/material";
import PlayerView from "src/sections/examples/player-view";
import Footer from "src/layouts/main/footer";
import MarketingLandingFreeSEO from "src/sections/_marketing/landing/marketing-landing-free-seo";
import CruxHero from "./CruxHero";
import CSection1 from "./CSection1";
import CSection2 from "./CSection2";
import CruxFeau from "./CruxFeau";
import CruxSol from "./CruxSol";
import CruxFaqs from "./CruxFaqs";


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
