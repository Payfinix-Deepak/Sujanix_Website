import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';
import CareerHeroIllustration from 'src/assets/illustrations/career-hero-illustration';

// ----------------------------------------------------------------------

export default function CareerLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

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
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid xs={12} md={6} lg={6} sx={{ marginTop: '5rem' }}>
            <Stack
              spacing={5}
              sx={{
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h1" sx={{ color: 'common.white' }}>
                  Stable, Rewarding Remote
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    {` Work `}
                  </Box>
                  Opportunities
                </Typography>

                <Typography sx={{ color: 'grey.500', fontFamily: 'sans-serif', fontSize: '19px' }}>
                  We unlock your remote success and provide stable opportunities to grow. Connect to
                  us to have a growing future ahead.{' '}
                </Typography>
              </Stack>

              {/* {renderFilters} */}

              {/* {renderBrands}

              {renderSummary} */}
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6}>
              <CareerHeroIllustration />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
