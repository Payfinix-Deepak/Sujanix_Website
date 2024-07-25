import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function CSection2() {
  return (
    <Container
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        <Grid xs={12} md={6} lg={6}>
          <Stack spacing={3} sx={{ mb: 5 }}>
            <Typography variant="h2">Crux Device Management</Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: '18px' }}>
              CRUX Device Management simplifies the configuration, deployment, management, and
              monitoring of devices across your organization with advanced features ensuring
              seamless operations. Key features include multiple provisioning methods for efficient
              setup, configurable passcode complexity, geofencing for location-based control,
              intuitive group management, network and roaming restrictions to control connectivity,
              and security settings for NFC and Bluetooth to protect against unauthorized access.
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <Image
            alt="services"
            src="https://img.freepik.com/free-vector/it-managers-integrate-technologies-into-business-operations-enterprise-it-management-it-software-solutions-enterprise-architecture-concept-illustration_335657-2376.jpg?size=626&ext=jpg&ga=GA1.1.157902740.1710857977&semt=ais_user"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
