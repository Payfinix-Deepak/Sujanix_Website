import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function CSection1() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {mdUp && (
          <Grid xs={12} md={12} lg={5}>
            <Image
              alt="teams"
              src="https://assets-global.website-files.com/64009032676f244c7bf002fd/64009032676f240f5df0119a_MDM_Blog.png"
            />
          </Grid>
        )}

        <Grid
          xs={12}
          md={12}
          lg={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Crux Unified Endpoint Management</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary', fontSize: '18px' }}>
            Crux Unified Endpoint Management offers a comprehensive suite of features designed to
            simplify device management: seamlessly manage Android devices from a centralized
            dashboard, implement robust security measures to safeguard data and maintain compliance,
            and effortlessly deploy and manage applications across multiple devices.
            <br />
            <br />
            Additionally, Crux provides advanced features such as real-time monitoring for better
            insights, automated firmware and software updates, and custom policies to enforce
            security and compliance standards. Experience the power of efficient Android device
            management with Crux.
          </Typography>

          {/* <Button
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Check Our Work
          </Button> */}
        </Grid>
      </Grid>
    </Container>
  );
}
