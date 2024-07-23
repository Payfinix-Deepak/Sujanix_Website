import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'projects',
    total: 20,
    content: '  Empowering Businesses Through Innovative Digital Solutions',
  },
  {
    label: 'Happy clients',
    total: 32000,
    content: '  Trusted Partner for Your Digital Success',
  },
  {
    label: 'years of experience',
    total: 20,
    content: ' Driving Innovation and Growth Through Digital Solutions',
  },
];

// ----------------------------------------------------------------------

export default function AboutHero2() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      {/* <Image
        alt="landing about"
        src="/assets/images/marketing/marketing_post_hero.jpg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      /> */}

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          {/* <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About us
          </Typography> */}

          <Typography variant="h2" sx={{ my: 3 }}>
            Who We Are
          </Typography>

          <Typography sx={{ color: 'text.secondary', fontSize: "18px", fontFamily: "sans-serif" }}>
          At Xeady, our motivated staff helps businesses reach their full potential through creative digital solutions. As we say, technology should improve rather than dominate our lives. Our narrative began with a simple concept: combining technology and human contact.
           We assist clients in achieving their objectives by working together and building trust.
          </Typography>

          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5, fontSize: "19px" }}
          >
            Lean more
          </Button>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "18px", fontFamily: "sans-serif" }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
