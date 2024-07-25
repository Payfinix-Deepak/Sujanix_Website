import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';





// ----------------------------------------------------------------------

export default function TruSol() {
    return (
        <Container
            sx={{
                py: { xs: 5, md: 8 },
               
            }}
        >
            <Stack sx={{ textAlign: "center", marginBottom: "3rem" }} spacing={2}>
                <Typography
                    variant="h2"
                    sx={{

                        textAlign: { xs: 'center', md: 'unset' },
                    }}
                >
                   Discover the TrueREAD solutions 
                </Typography>
                
            </Stack>
            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Accuracy​"
                        description=" When compared to manual readings, TrueReadLink's great accuracy in electric meter reading minimizes errors."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Efficiency"
                        description="Minimizes the amount of time required for data gathering and processing by automating the meter reading process."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Cost Savings"
                        description="Reduces workforce costs significantly by doing away with the requirement for physical labor in meter reading."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Real-Time Processing"
                        description="Delivers information from meter readings instantly, enabling quick billing and customer support responses."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Data Integrity"
                        description="Guarantees consistent and trustworthy data for billing and analytics while lowering the possibility of human mistake."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Integration"
                        description="Simplifies the entire utility management process by integrating with databases that are already in place."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Accessibility"
                        description="It is accessible to a broad spectrum of consumers as it is available on several platforms (iOS, Android, and the web)."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Sustainability"
                        description="Contributes to environmental sustainability by lowering carbon footprint with the requirement for physical trip to read meters. "
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Scalability"
                        description="Adaptable to both large-scale operations and local utility enterprises, capable of managing high volumes of meter readings. "
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

        </Container>
    );
}

// ----------------------------------------------------------------------

function BrandInfo({ logo, name, description, path, sx, ...other }) {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                p: 5,
                borderRadius: 2,
                textAlign: 'center',
                border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.24)}`,
                ...sx,
            }}
            {...other}
        >
           

            <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
                {name}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "18px", fontFamily: 'sans-serif' }}>
                {description}
            </Typography>


        </Stack>
    );
}

BrandInfo.propTypes = {
    logo: PropTypes.node,
    sx: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    description: PropTypes.string,
};
