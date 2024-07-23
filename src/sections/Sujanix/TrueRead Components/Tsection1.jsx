import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: 'carbon:increase-level' },
  { title: 'Awards', total: 20, icon: 'carbon:trophy' },
  { title: 'Projects', total: 150, icon: 'carbon:data-vis-4' },
  { title: 'Happy clients', total: 32000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function Tsection1() {
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
          <Grid xs={12} md={6} lg={5}>
            <Image alt="teams" src="/assets/illustrations/illustration_teams.svg" />
          </Grid>
        )}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">TrueRead: Seamless Electric Meter Reading</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary', fontSize: '18px' }}>
            Modern Optical Character Recognition (OCR) technology is used by the creative Android
            software TrueRead to expedite and simplify the process of reading and recording
            electric meter readings. All it takes is a photo of your electric meter to have your
            reading precisely captured by TrueRead, which then converts it into digital data for
            easy billing. This intuitive program is a vital resource for utility businesses and
            customers alike, as it guarantees accuracy, minimizes human mistake, and saves
            significant time. Managing your electricity usage and bills becomes easier and more
            efficient than ever with TrueRead.
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
