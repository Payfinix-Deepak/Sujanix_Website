import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Hero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
         
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={7}
            lg={7}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              Digital Marketing
            </Typography> */}

            <Typography variant="h2" sx={{ my: 3 }}>
              Your Technology Partner for Custom, Innovative, and Quality Software Solutions
            </Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: "19px", fontFamily: "sans-serif" }}>
            We craft customized software solutions to empower your vision. Become a technology leader with our partnership.            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'center', md: 'unset' }}
              justifyContent={{ xs: 'center', md: 'unset' }}
              sx={{ mt: 5 }}
            >
              {/* <Button variant="contained" color="inherit" size="large" href='/HomeLanding/Contact'>
                BOOK A CALL
              </Button> */}


            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={5} lg={5}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/illustrations/illustration_marketing_market.svg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
