import Header from 'src/layouts/main/header';
import { Container, Typography } from '@mui/material';
import Footer from 'src/layouts/main/footer';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';
import TruHero from './TruHero';
import Tsection2 from './Tsection2';
import Tsection1 from './Tsection1';
import PlayerView2 from './PlayerView2';
import TruFeau from './TruFeau';
import TruSol from './TruSol';
import TruFaqs from './TruFaqs';

export default function TruView() {
  return (
    <>
      <Header />
      <TruHero />
      <Tsection2 />
      <Tsection1 />
      <PlayerView2 />
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          TrueREAD Features
        </Typography>
      </Container>
      <TruFeau />
      <TruSol />
      <TruFaqs />
      <MarketingLandingFreeSEO />
      <Footer />
    </>
  );
}
