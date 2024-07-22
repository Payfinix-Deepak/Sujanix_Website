import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { _mock } from 'src/_mock';

import Iconify from 'src/components/iconify';
import Player, { PlayerDialog } from 'src/components/player';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function PlayerView() {
  const videoOpen = useBoolean();
  // const [playing, setPlaying] = useState(false);

  // const handlePlayButtonClick = () => {
  //   setPlaying(true);
  // }
  return (
    <>
      {/* <Box
        sx={{
          py: 5,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
        }}
      >
        <Container>
          <CustomBreadcrumbs
            heading="Player"
            links={[
              {
                name: 'Components',
                href: paths.components.root,
              },
              { name: 'Player' },
            ]}
            moreLink={['https://www.npmjs.com/package/react-player']}
          />
        </Container>
      </Box> */}

      <Container sx={{ my: 10 }}>
        <Box gap={3} display="grid" gridTemplateColumns="repeat(1, 1fr)">
          <Player controls url={_mock.video(2)} />

          {/* <Stack alignItems="center" justifyContent="center">
            <Fab color="primary" variant="extended" onClick={videoOpen.onTrue}>
              <Iconify icon="carbon:play" width={24} />
              Open with Dialog
            </Fab>
          </Stack> */}
           
           {/* {!playing && (
            <Fab
              color="secondary"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'orange',
              }}
              onClick={handlePlayButtonClick}
            >
              <Iconify icon="carbon:play" width={24} />
            </Fab>
          )} */}
        </Box>
      </Container>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
