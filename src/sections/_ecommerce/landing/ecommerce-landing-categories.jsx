import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: 'Python',
    icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',
    path: '#',
  },
  {
    label: 'Java',
    icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968282.png',
    path: '#',
  },
  {
    label: 'Javascript',
    icon: 'https://cdn-icons-png.flaticon.com/128/1199/1199124.png  ',
    path: '#',
  },
  {
    label: 'Swift',
    icon: 'https://cdn-icons-png.flaticon.com/128/732/732250.png',
    path: '#',
  },
  {
    label: 'Kotlin',
    icon: 'https://www.capitalnumbers.com/images/pool-icon-home/kotlin-icon.svg',
    path: '#',
  },
  {
    label: 'Typescript',
    icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png',
    path: '#',
  },
  {
    label: 'Node.js',
    icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968381.png',
    path: '#',
  },
  { label: 'React.js', icon: 'https://www.capitalnumbers.com/images/pool-icon-home/react-icon.svg', path: '#' },
  { label: 'Angular.js', icon: 'https://www.capitalnumbers.com/images/pool-icon-home/angular-icon.svg', path: '#' },
  { label: 'Vue.js', icon: 'https://www.capitalnumbers.com/images/pool-icon-home/vue-js-icon.svg', path: '#' },
  { label: 'Django', icon: 'https://cdn-icons-png.flaticon.com/128/9307/9307630.png', path: '#' },
  {
    label: 'Laravel',
    icon: 'https://www.capitalnumbers.com/images/pool-icon-home/laravel-icon.png',
    path: '#',
  },
];

// ----------------------------------------------------------------------

export default function EcommerceLandingCategories() {
  return (
    <Container
      sx={{
        pt: { xs: 15, md: 15 },
        pb: { xs: 15, md: 15 },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 8,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Stack sx={{ textAlign: "center" }} spacing={2}>
          <Typography variant="h2">
            Hire Experts in Today&apos;s Leading Technologies
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "19px", fontFamily: "sans-serif" }}>
          Our team of skilled technologists possess a deep understanding of leading technologies. Unlock the potential of cutting-edge solutions and stay ahead with our unwavering commitment to your success.
           Fuel innovation partner with our technology experts.
          </Typography>

        </Stack>
      </Typography>

      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(4, 1fr)',
          md: 'repeat(6, 1fr)',
        }}
      >
        {CATEGORIES.map((category) => (
          <Stack
            key={category.label}
            alignItems="center"
            justifyContent="center"
            sx={{
              px: 1,
              py: 3,
              borderRadius: 2,
              cursor: 'pointer',
              border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
              '&:hover': {
                boxShadow: (theme) => `0 0 0 2px ${theme.palette.text.primary}`,
              },
            }}
          >
            <Box
              sx={{
                mb: 2,
                p: 1.5,
                bgcolor: 'background.neutral',
                borderRadius: '50%',
              }}
            >
              <Image src={category.icon} sx={{ width: 40, height: 40 }} />
            </Box>

            <TextMaxLine variant="subtitle2" line={1}>
              {category.label}
            </TextMaxLine>
          </Stack>
        ))}
      </Box>
      {/* <Container style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button variant="contained" color="inherit" size="large" href='/HomeLanding/Contact'>
          BOOK A CALL
        </Button>
      </Container> */}
    </Container>
  );
}
