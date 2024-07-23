import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import { _products } from 'src/_mock';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function CruxSol() {
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
                   Discover the Crux UEM solutions 
                </Typography>
                
            </Stack>
            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Enrolling and provisioning devices​"
                        description=" UEM systems provide a portal where users may self-enroll and have their devices provisioned automatically, hence reducing the administrative effort associated with BYOD."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Applying and enforcing security policies"
                        description="Administrators have extensive control over data encryption techniques, password renewal policies, length and complexity of passwords, and multi-factor authentication."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Pushing patches and updates"
                        description="When necessary, the UEM can automatically apply updates to the endpoints, after scanning them for the software and firmware, or the operating system vulnerabilities."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Controlling apps and applications"
                        description="Employers have the authority to restrict or allow the use of particular apps or programs, as well as stop illegitimate apps or programs from accessing company information."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Isolating corporate and personal data"
                        description="In addition to offering BYOD users a best possible experience this approach safeguards private data. It ensures company information is protected and respects employees privacy."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Keeping endpoint security solutions up to date"
                        description="Admins can update web filters with the most recent lists of URLs that are blocked or allowed, and install the most recent antivirus definitions on devices."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

            <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Securing connections"
                        description="UEM lets administrators specify the type of connection. For example, wifi, VPN, and by device, by user or even by application."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Identifying and remediating threats"
                        description="UEM can assist in identifying anomalous device behaviors by combining with UEBA, endpoint detection and response (EDR), and other security solutions. "
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        name="Wiping and locking lost, stolen or end-of-lifecycle devices"
                        description="UEM serves as a last line of protection, enabling administrators, clean or retired devices in order to stop illegal access to the network. "
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid>

            {/* <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        logo={<Iconify icon="arcticons:fashion-arena-fashion-club" width={40} />}
                        name="Fashion"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes"
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        logo={<Iconify icon="fluent-mdl2:education" width={40} />}
                        name="Education"
                        description="Enhance student engagement and comprehension across a range of courses by facilitating immersive learning experiences through the use of virtual field trips, interactive simulations, and 3D models."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <BrandInfo
                        logo={<Iconify icon="fluent:design-ideas-24-regular" width={40} />}
                        name="Interior Design"
                        description="Design professionals and clients can experiment with various furniture configurations, color schemes, and layouts prior to execution by using virtual reality to visualize and personalize interior spaces."
                        path="#"
                        sx={{ height: 1 }}
                    />
                </Grid>


            </Grid> */}
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
