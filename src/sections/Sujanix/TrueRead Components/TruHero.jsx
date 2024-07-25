
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';



// ----------------------------------------------------------------------

export default function TruHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        pt: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        pb: { xs: 10, md: 15 },
        display: { md: 'flex' },
        minHeight: { md: '100vh' },
        marginTop: '5rem',
      }}
    >
      <Container sx={{ height: '10%' }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={7}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={5}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  True
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    READ
                  </Box>
                </Typography>

                <Typography sx={{ color: 'grey.500', fontFamily: 'sans-serif', fontSize: '19px' }}>
                  Our patented app, TrueRead, allows a Discom to perform OCR-based billing for its
                  customers. It is a mobile app-based solution that is simple to integrate with a
                  discom&apos;s billing software.
                  <br />
                  <br />
                  The app includes a feature-rich back-end web application that gathers and analyzes
                  billing data derived from optical character recognition (OCR) and presents
                  insightful quantitative and qualitative data in the form of dashboards, reports,
                  and galleries.
                </Typography>
              </Stack>

              {/* {renderFilters} */}

              {/* {renderBrands}

                    {renderSummary} */}
            </Stack>
          </Grid>

          {/* {mdUp && (
                        <Grid xs={12} md={3} lg={5}>
                            <CareerHeroIllustration />
                        </Grid>
                    )} */}
        </Grid>
      </Container>
    </Box>
  );
}
