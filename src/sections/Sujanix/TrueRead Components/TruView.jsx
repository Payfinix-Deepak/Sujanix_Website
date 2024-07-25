import { Container, Typography } from '@mui/material';

import Header from 'src/layouts/main/header';
import Footer from 'src/layouts/main/footer';

import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';

import TruSol from './TruSol';
import TruHero from './TruHero';
import TruFeau from './TruFeau';
import TruFaqs from './TruFaqs';
import Tsection2 from './Tsection2';
import Tsection1 from './Tsection1';
import PlayerView2 from './PlayerView2';

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
