import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Tsection2() {
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
            <Typography variant="h2">
              TrueRead OCR: Revolutionizing Electric Meter Reading
            </Typography>

            <Typography sx={{ color: 'text.secondary', fontSize: '18px' }}>
              TrueRead OCR uses cutting-edge Optical Character Recognition (OCR) technology to
              simplify and improve the accuracy of electric meter readings. To avoid manual entry
              errors, simply take a photo of your meter using the TrueRead app, and the OCR will
              detect and read the meter automatically. 
              <br />
              <br />
              The program swiftly processes photos,
              supports a variety of meter kinds, and has a step that allows you to confirm the
              correctness of the results. Your privacy is guaranteed by the safe processing and
              storage of all data. You may create thorough reports, track your electricity usage
              over time, and discover ways to lower your expenses with TrueRead OCR. It&apos;s an
              easy, time-saving, and economical way to keep track of your electric meter readings.
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <Image alt="services" src="/assets/illustrations/illustration_services.svg" />
        </Grid>
      </Grid>
    </Container>
  );
}
