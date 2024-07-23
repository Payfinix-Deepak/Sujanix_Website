import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------



const SERVICES = [
    {
        title: 'Dashboard',
        description: 'A comprehensive perspective of all OCR activities, quantitatively illustrating the major performance metrics ',
        icon:"https://cdn-icons-png.flaticon.com/128/2328/2328966.png",
    },
    {
        title: 'Meter Vision Analytics',
        description: 'A statistical representation of the number of OCR activities completed, categorized by location, consumers, agencies, and MR. ',
        icon: "https://cdn-icons-png.flaticon.com/128/2920/2920349.png",
    },
    {
        title: ' Quality Check',
        description: 'To enhance the OCR machine learning model, a rich quality check interface is utilized to manually verify the meter photos and categorize them according to various visual aspects. ',
        icon: "https://cdn-icons-png.flaticon.com/128/1875/1875621.png",
    },
    {
        title: 'Reports',
        description: ' MRs, Locations, Exceptions, and other metrics are among the statistical data of the OCR-based reading activities that are provided by a standard set of reports. ',
        icon: "https://cdn-icons-png.flaticon.com/128/3029/3029337.png",
    },
    {
        title: ' Field Force Management',
        description: 'A statistical real-time map that shows the location-wise, meter-reader-based OCR billing activities.Interface for notifying Meter Readers via mobile devices.',
        icon: "https://cdn-icons-png.flaticon.com/128/4946/4946348.png",
    },
    {
        title: ' Supervisor App',
        description: 'To verify and quality check the meter photos, the Supervisor app offers a comprehensive interface.With relation to OCR-based billing, it provides the meter reader summary.',
        icon: "https://cdn-icons-png.flaticon.com/128/1055/1055668.png",
    },
   

];

// ----------------------------------------------------------------------

export default function TruFeau() {
    return (
        <Container
            sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: { xs: 10, md: 15 },
               
            }}
        >

            {/* <Typography
                sx={{
                    mt: 3,
                    mx: 'auto',
                    maxWidth: 480,
                    color: 'text.secondary',
                    mb: { xs: 8, md: 10 },
                }}
            >
                Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
            </Typography> */}

            <Box
                sx={{
                    rowGap: 8,
                    columnGap: 7.9,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },

                }}
            >
                {SERVICES.map((value) => (
                    <div key={value.title}>
                        <Image
                            src={value.icon}
                            color="info"
                            sx={{
                                width: 64,
                                height: 64,
                                mx: 'auto',
                               
                            }}
                        />

                        <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
                            {value.title}
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', fontFamily: 'sans-serif', fontSize: "18px" }}> {value.description} </Typography>
                    </div>
                ))}
            </Box>
        </Container>
    );
}
