import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';

import { useBoolean } from 'src/hooks/use-boolean';

import { _mock } from 'src/_mock';

import Player, { PlayerDialog } from 'src/components/player';

// ----------------------------------------------------------------------

export default function PlayerView2() {
  const videoOpen = useBoolean();
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
        <Box gap={1} display="grid" gridTemplateColumns="repeat(1, 1fr)">
          <Grid container>
            <Grid item xs={12} lg={12} sx={{ height: 'auto' }}>
              <Player
                controls
                url={_mock.video(3)}
                sx={{ height: '100px', width: '100%' }} // Adjust the height here
              />
            </Grid>
          </Grid>


          {/* <Stack alignItems="center" justifyContent="center">
            <Fab color="primary" variant="extended" onClick={videoOpen.onTrue}>
              <Iconify icon="carbon:play" width={24} />
              Open with Dialog
            </Fab>
          </Stack> */}
        </Box>
      </Container >

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
