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
            <Image alt="teams" src="https://assets-global.website-files.com/64009032676f244c7bf002fd/64009032676f240f5df0119a_MDM_Blog.png" />
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
            <br/><br/>
             Additionally,
            Crux provides advanced features such as real-time monitoring for better insights,
            automated firmware and software updates, and custom policies to enforce security and
            compliance standards. Experience the power of efficient Android device management with
            Crux.
            
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
