import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import MarketingNewsletter from '../marketing-newsletter';
import { Stack } from '@mui/material';
import MarketingContactInfo from '../contact/marketing-contact-info';
import MarketingContactForm from '../contact/marketing-contact-form';
// import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function MarketingContactView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
          
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          justifyContent="space-between"
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={6} lg={5}>
            <MarketingContactInfo />
          </Grid>

          <Grid xs={12} md={6} lg={6} sx={{marginTop:"7rem"}} >
            <Stack spacing={3}>
              <Typography variant="h2" sx={{ mb: 5, textAlign: "center", marginBottom: "0.7rem" }}>
                Let&apos;s Talk
              </Typography>
              <Typography variant='body' sx={{ fontSize: "19px", color: "text.disabled", textAlign: "center", fontFamily: "sans-serif" }}>
                Reach out to us at info@xeady.com to start the conversation and explore how we can assist with your needs.
              </Typography>
            </Stack><br />
            <MarketingContactForm  />
          </Grid>
        </Grid>
      </Container>
     
    </>
  );
}
