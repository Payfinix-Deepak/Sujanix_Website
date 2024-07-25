import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import MapMarkersPopups from 'src/sections/Sujanix/MapView/map-markers-popups';

// ----------------------------------------------------------------------

const StyledMapContainer = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 500,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

export default function ElearningContactInfo() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Our Locations
          </Typography>

          <Stack spacing={5}>
            <Stack spacing={2}>
              <Grid container spacing={2}>
                <Grid xs={12} md={12} lg={1}>
                  <Typography>
                    <Iconify icon="mdi:location" sx={{ color: '#d74f37' }} width={28} />
                  </Typography>
                </Grid>

                <Grid xs={12} md={12} lg={11} spacing={3}>
                  <Typography variant="h5"> INDIA</Typography>
               
                  <Typography>
                    <Grid container spacing={1}>
                      <Grid xs={12} md={6} lg={7}>
                        <Stack>
                          <Typography variant="h6">Bangalore</Typography>
                          <Typography variant="body">
                            Unit 301-303, Oxford Towers, #139, HAL Airport Road, Bangaluru - 560008.
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid xs={12} md={6} lg={5}>
                        <Stack>
                          <Typography variant="h6">Kolkata</Typography>
                          <Typography variant="body">
                            No 128, Gold Park, Rajdanga, Kasba, Kolkata - 700 107.
                          </Typography>
                        </Stack>{' '}
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
            <Stack>
              <Grid container>
                <Grid xs={12} md={12} lg={1}>
                  <Iconify icon="mdi:location" sx={{ color: '#d74f37' }} width={28} />
                </Grid>
                <Grid xs={12} md={12} lg={11}>
                  <Typography variant="h5">USA</Typography>
                 
                  <Typography>
                    <Grid container spacing={1}>
                      <Grid xs={12} md={6} lg={7}>
                        <Stack>
                          <Typography variant="h6">Las Vegas</Typography>
                          <Typography variant="body">
                          Xeady Technology inc, 304 S.Jones Blvd, #4449, Las Vegas, NV 89107.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Typography>
                </Grid>
              </Grid>
            </Stack>
          </Stack>

          {/* <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
              </Stack>

              <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                hello@example.com
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
              </Stack>

              <Typography variant="body2">(907) 555-0101</Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
              </Stack>

              <Typography variant="body2">
                3891 Ranchview Dr. Richardson, California 62639
              </Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Follow Us</Typography>
              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value} color="inherit">
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack> */}
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <StyledMapContainer>
            <MapMarkersPopups/>
          </StyledMapContainer>{' '}
        </Grid>
      </Grid>
    </Container>
  );
}
