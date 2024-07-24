import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _offices } from 'src/_mock';

import Image from 'src/components/image';

import { varHover, varTranHover } from 'src/components/animate';
import { Button } from '@mui/material';


// ----------------------------------------------------------------------

export default function LatestNews() {
  const offices = [
    {
      id: 1,
      country: '11 Trends to Keep an Eye on in the Current API Economy',
      address:
        'This article focuses on important developments like the growing popularity of microservices, the growing emphasis on API security',

      photo: 'src/assets/Images/API1.jpg',
    },
    {
      id: 2,
      country: 'API State: Continued Growth and Prospects for Further Growth',
      address:
        'The yearly study from RapidAPI indicates that the API economy is expanding rapidly. The article highlights the growing use of internal ',
      photo: 'src/assets/Images/API2.jpg',
    },
    {
      id: 3,
      country: "Today's Top 10 API Trends: Transforming Digital Business",
      address:
        'Important themes covered in this blog include the growth of API security controls and the ubiquity of specialized APIs',
      photo: 'src/assets/Images/API3.jpg',
    },
  ];

  return (
    <>
      {/* <Container
        sx={{
          pt: 5,
          pb: 10,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h2">
          We Work <br />
          Worldwide.
        </Typography>

        <Typography sx={{ color: 'text.secondary', mt: 3 }}>
          {`We'd love to talk about how we can help you.`}
        </Typography>
      </Container> */}

      <Box
        sx={{
          py: { xs: 10, md: 15 },
          
        }}
      >
        <Container>
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem' }}>
            Latest News
          </Typography>
          <Box
            sx={{
              gap: 4,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {offices.map((office) => (
              <OfficeCard key={office.id} office={office} />
            ))}
          </Box>
          {/* <Container style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="contained" color="inherit" size="large" href="/HomeLanding/Blog">
              READ MORE BLOG POSTS
            </Button>
          </Container> */}
        </Container>
      </Box>
    </>
  );
}

// ----------------------------------------------------------------------

function OfficeCard({ office }) {
  const { country, address, photo, email } = office;

  return (
    <Paper
      component={m.div}
      whileHover="hover"
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Box sx={{ overflow: 'hidden', cursor: 'pointer' }}>
        <m.div variants={varHover()} transition={varTranHover()}>
          <Image src={photo} alt={country} ratio="4/3" />
        </m.div>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }}>
        <Typography variant="h5" sx={{ mb: 0.5, cursor: 'pointer' }}>
          {country}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5, fontSize: '18px', fontFamily: 'sans-serif' }}>
          {address}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5, fontSize: '17px', fontFamily: 'sans-serif' }}>
          {email}
        </Typography>
        <Typography>
          <Button variant="outlined" color="inherit" size="medium" href="/marketing/post">
            READ MORE
          </Button>
        </Typography>

        {/* <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Address
            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} sx={{ ml: 1 }} />
            </Link>
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {address}
          </Typography>
        </Stack> */}

        {/* <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Phone
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {phoneNumber}
          </Typography>
        </Stack> */}

        {/* <Stack spacing={0.5}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
            <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Email
          </Stack>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {email}
          </Typography>
        </Stack> */}
      </Stack>
    </Paper>
  );
}

OfficeCard.propTypes = {
  office: PropTypes.shape({
    address: PropTypes.string,
    country: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    photo: PropTypes.string,
  }),
};
