
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';



// ----------------------------------------------------------------------

export default function CruxHero() {
    const theme = useTheme();


  

 
    return (
        <Box
        sx={{
            ...bgGradient({
                startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
                endColor: `${theme.palette.common.black} 67%`,
                direction: 'to left', 
                // color: alpha(theme.palette.grey[900], 0.8),
                // imgUrl: Crux,
            }),
            py: { xs: 15, md: 20 },
            pt: 15,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            // pb: { xs: 10, md: 15 },
            display: { md: 'flex' },
            minHeight: { md: '100vh' },
            marginTop:"4rem"
        }}
        >
            <Container sx={{ height: "10%" }}>
                <Grid container spacing={3} justifyContent="space-between">
                    <Grid xs={12} md={6} lg={7}>
                        <Stack
                            spacing={5}
                            sx={{
                                textAlign: { xs: 'center', md: 'unset' },
                            }}
                        >
                            <Stack spacing={5}>
                                <Typography variant="h1" sx={{ color: 'common.white' }}>


                                    Crux

                                    <Box component="span" sx={{ color: 'primary.main',marginLeft:"0.4rem" }}>
                                        UEM
                                    </Box>

                                </Typography>

                                <Typography sx={{ color: 'grey.500', fontFamily: "sans-serif", fontSize: "19px" }}>
                                Crux UEM is the one window for mobile device management for your fieldworkers.
                                This will satisfy the needs and requirements for control and management of devices used in the field for survey, consumer indexing, and spot billing. 
                                It ensures smooth communication and collection mechanisms while enhancing productivity and field efficiency.
                                </Typography>


                            </Stack>

                            {/* {renderFilters} */}

                            {/* {renderBrands}

                    {renderSummary} */}
                        </Stack>
                    </Grid>

                    {/* {mdUp && (
                        <Grid xs={12} md={3} lg={5}>
                            <CareerHeroIllustration />
                        </Grid>
                    )} */}
                </Grid>
            </Container>
        </Box>
    );
}

