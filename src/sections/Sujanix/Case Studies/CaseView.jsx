import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import MarketingNewsletter from '../marketing-newsletter';
// import MarketingCaseStudyList from '../list/marketing-case-study-list';
import { _testimonials } from 'src/_mock';
import Header from 'src/layouts/main/header';
import Footer from 'src/layouts/main/footer';

import MarketingTestimonial from 'src/sections/_marketing/testimonial/marketing-testimonial';

import CaseCards from './CaseCards';

// ----------------------------------------------------------------------

export default function CaseView() {
  return (
    <>
      <Header />
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography sx={{ textAlign: 'center',marginTop:'6rem'}} variant="h2">
            {' '}
            Case Studies
          </Typography>
        </Stack>

        <CaseCards />
      </Container>
      <MarketingTestimonial testimonials={_testimonials} />
      <Footer/>
    </>
  );
}
