import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'src/components/image';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const Images = [
    "https://cdn-icons-png.flaticon.com/128/6291/6291313.png",
    "https://cdn-icons-png.flaticon.com/128/12450/12450938.png",
    "https://cdn-icons-png.flaticon.com/128/5579/5579344.png",
    "https://cdn-icons-png.flaticon.com/128/7568/7568486.png",
    "https://cdn-icons-png.flaticon.com/128/9085/9085934.png",
    "https://cdn-icons-png.flaticon.com/128/6137/6137008.png",
    "https://cdn-icons-png.flaticon.com/128/5759/5759705.png",
    "https://cdn-icons-png.flaticon.com/128/6291/6291313.png",
    "https://cdn-icons-png.flaticon.com/128/10086/10086806.png",
]



const SERVICES = [
    {
        title: 'Securely access emails',
        description: 'Employing email services like Office 365 and Exchange ActiveSync will allow you to securely access business emails. Encrypt content to improve security and limit other app access to your mail data.  ',
        icon: "https://cdn-icons-png.flaticon.com/128/16743/16743691.png",
    },
    {
        title: 'Enforce maximum mobile security',
        description: 'Increase security by containerizing BYOD data, using strong passcodes, and device authentication. Remote device locking, selective or complete data wiping are ways to safeguard gadgets. ',
        icon: "https://cdn-icons-png.flaticon.com/128/3130/3130881.png",
    },
    {
        title: ' Regularly audit devices and apps',
        description: 'Provide thorough reports on every mobile asset, including app inventories. Check the compliance status on a regular basis and report any lost, jailbroken, or rooted devices. ',
        icon: 'https://cdn-icons-png.flaticon.com/128/186/186239.png',
    },
    {
        title: 'Manage app life cycles',
        description: ' Manage the business application life cycle from launch to retirement. Silently push corporate software to devices, control volume licensing, and add unapproved apps to a black list. ',
        icon: "https://cdn-icons-png.flaticon.com/128/2550/2550561.png",
    },
    {
        title: ' Complete mobile device management',
        description: 'Oversee and manage employee- and company-owned devices on your network. From purchase until retirement, effectively handle any iOS, Android, and Windows Phone device.',
        icon:"https://cdn-icons-png.flaticon.com/128/2552/2552068.png",
    },
    {
        title: ' Instant and automated enrollment',
        description: 'Enroll your company fleet of devices using platform-specific enrollment procedures, such as Android NFC, Samsung KNOX, and Apple DEP. ',
        icon:"https://cdn-icons-png.flaticon.com/128/8369/8369158.png",
    },
    {
        title: 'Device Enrollment',
        description: 'A straightforward procedure that the end user can complete enrolls the device to be maintained and watched over in the MDM. Two main ways are available for enrolling.   ',
        icon: Images[5],
    },
    {
        title: 'Fully Managed Mode',
        description: 'The end user can enroll the device to be managed and monitored in the MDM through a straightforward process. There are two main methods for enrolling.  ',
        icon: Images[6],
    },
    {
        title: 'Work Profile Mode',
        description: 'Workplace software and information are kept on a device in a distinct, self-contained area. Apps, data, and settings on the device work profile are fully managed by the organization. ',
        icon: Images[6],
    },

];

// ----------------------------------------------------------------------

export default function CruxFeau() {
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
