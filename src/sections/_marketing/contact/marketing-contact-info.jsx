import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {mdUp && (
        <Image
          alt="marketing contact"
          src="/assets/illustrations/illustration_marketing_contact.svg"
          sx={{ maxWidth: 380 }}
        />
      )}

      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Iconify icon="carbon:location" width={28} />

        <Stack spacing={0.5}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="h6">Visit us</Typography>

            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} />
            </Link>
          </Stack>
          <Stack>
            <Typography variant="h6">Head Office</Typography>
            <Typography variant="body2">
              Unit 301-303, Oxford Towers, #139, HAL Airport Road, Bangaluru - 560008
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">Branch Office</Typography>
            <Typography variant="body2">
              No 128, Gold Park, Rajdanga, Kasba, Kolkata - 700107{' '}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">Overseas Office</Typography>
            <Typography variant="body2">
              1095, VIA VENETO, SAN RAMON 94583, CALIFORNIA, USA{' '}
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Call us</Typography>
        </Stack>
      </Stack> */}

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Talk to us</Typography>
          <Link color="inherit" variant="body2" href="mailto:info@xeady.com">
            info@xeady.com
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:time" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Working Hours</Typography>
          <Typography variant="body2">Mon-Fri: 10 am — 7 pm</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
