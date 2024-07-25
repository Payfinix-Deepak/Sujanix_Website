import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button, Pagination, paginationClasses } from '@mui/material';

import C2 from 'src/Images/C2.jpg';
import C3 from 'src/Images/C3.jpg';
import C5 from 'src/Images/C5.jpg';
import C7 from 'src/Images/C7.jpg';
import C8 from 'src/Images/C8.jpg';
import C6 from 'src/Images/C6.jpg';
import C1 from 'src/Images/C1.jpg';
import C11 from 'src/Images/C11.jpg';
import C12 from 'src/Images/C12.jpg';
import C14 from 'src/Images/C14.jpg';
import C15 from 'src/Images/C15.jpg';

import Image from 'src/components/image';
import { varHover, varTranHover } from 'src/components/animate';


// ----------------------------------------------------------------------

export default function CaseCards() {


    const offices = [
        {
            id: 1,
            country: "Optimizing Software Delivery with Shopify Integration",
            address: "Shopify developers automated user onboarding, billing notifications, and subscription renewals for a smooth user experience by integrating Shopify with CRM and billing systems. ",


            photo: C1,
            email: "READ MORE"
        },
        {
            id: 2,
            country: " Enhancing Financial Services with Secure Transactions",
            address: "In order to ensure compliance with industry requirements, Shopify engineers added bespoke capabilities for handling financial items in addition to a secure, PCI-compliant payment gateway. ",


            photo: C2,
            email: "READ MORE"
        },
        {
            id: 3,
            country: "Streamlining Campaign Management",
            address: "The performance statistics, campaign management, and real-time data tracking were made possible by the bespoke dashboard that Shopify engineers linked with multiple marketing technologies. ",


            photo: C3,
            email: "READ MORE"
        },
        {
            id: 4,
            country: "Boosting Online Sales with Custom Features",
            address: "The storefront was customized, advanced search features were integrated, recommendations were made and checkout process was streamlined by Shopify engineers. ",


            photo: "https://img.freepik.com/free-vector/seo-website-software-development-app-optimization-programming-web-designers-programmers-cartoon-characters-mobile-content-concept_335657-1187.jpg?t=st=1719396312~exp=1719399912~hmac=ba495997f571fc5e3aea4fb985b7745ed7090247f74dfd34f43473e2a8047fd6&w=996",
            email: "READ MORE"
        },
        {
            id: 5,
            country: "Creating a Unique Shopping Experience",
            address: "The developers at Shopify created a custom theme and included interactive elements such as virtual try-ons, style guidelines, and look books.",


            photo: C5,
            email: "READ MORE"
        },
        {
            id: 6,
            country: " Scaling Operations with Advanced Integrations",
            address: "Amazon and eBay are just a couple of the sales channels and inventory management systems that Shopify developers have connected with the Shopify platform.",


            photo: C6,
            email: "READ MORE"
            ,
        },
        {
            id: 7,
            country: "Facilitating Renewable Energy Solutions",
            address: "To handle client contacts, sales, and post-purchase support, Shopify developers built a tailored CRM system that was connected with the platform. ",


            photo: C7,
            email: "READ MORE"
        },
        {
            id: 8,
            country: "Transforming Patient Services Through Workflow Optimization",
            address: "The management of patient records, billing, and appointment scheduling was included into the Shopify platform using a custom solution created by Shopify engineers.",


            photo: C8,
            email: "READ MORE"
        },
        {
            id: 9,
            country: " Scaling Operations with Advanced Integrations",
            address: "A personalized online store with interactive elements like fan forums, live event updates, and special goods drops was made by Shopify developers.",


            photo: C6,
            email: "READ MORE"
        },
        {
            id: 10,
            country: " Automating Financial Product Sales",
            address: "The loan application and approval processes were automated while maintaining data security and regulatory compliance thanks to a custom application form made by Shopify developers.",


            photo: "https://d1dh8zq0hn9bdl.cloudfront.net/website/wp-content/uploads/2022/11/01110334/Sales-Automation-Process.jpg",
            email: "READ MORE"
        },
        {
            id: 11,
            country: " Maximizing Client Campaign Effectiveness",
            address: "The developers of Shopify integrated local payment gateways, added support for other currencies and languages, and improved shipping and logistics for purchases coming from overseas.",


            photo: C11,
            email: "READ MORE"
        },
        {
            id: 12,
            country: " Enhancing Global Sales and International Market Reach",
            address: "A community-focused Shopify store featuring user-generated content sections, forums, and a blog for exchanging eco-friendly advice and anecdotes was created by Shopify engineers. ",


            photo: C12,
            email: "READ MORE"
        },
        {
            id: 13,
            country: " Building a Community-Driven Store",
            address: "A high-performance Shopify store with features like product bundling, pre-order capabilities, and comprehensive analytics was created by Shopify developers with an emphasis on speed and user experience. ",


            photo: "https://www.smartosc.com/wp-content/uploads/2023/04/3534817_1-scaled.jpg",
            email: "READ MORE"
        },
        {
            id: 14,
            country: "Unveiling Innovative Product Offerings",
            address: "Advanced analytics, product bundling, pre-order capability, and speed and user experience optimization are just a few of the features that Shopify developers included in their high-performance Shopify site design. ",


            photo: C14,
            email: "READ MORE"
        },
        {
            id: 15,
            country: " Promoting Sustainable Energy Products",
            address: "A unique store with products with well-designed pages and a ROI calculator was created by Shopify developers. For more interaction they included instructional materials, a blog with posts and endorsements and email marketing tools.",


            photo: C15,
            email: "READ MORE"
        },
        {
            id: 16,
            country: "Seamlessly Integrating Telehealth Solutions for Patient Care",
            address: "Within the Shopify store, online payment options, secure video consultation capabilities, and telehealth service bookings were integrated using a custom solution developed by Shopify engineers.",


            photo: "https://harmony.solutions/wp-content/uploads/2021/06/telehealth_june-14-scaled.jpg",
            email: "READ MORE"
        },
        {
            id: 17,
            country: " Boosting Fan Engagement Through Merchandise Sales",
            address: "For the esports squad, Shopify developers designed an eye-catching store featuring pre-orders, limited-time deals, and exclusive drops. It included player profiles, fan forums and behind-the-scenes material. ",


            photo: "https://media.licdn.com/dms/image/D5612AQH9_p284dUPbQ/article-cover_image-shrink_600_2000/0/1712321953076?e=2147483647&v=beta&t=L0vsyYJbzwD12aFac5At8LlpkftcW4LbyICkdexGuig",
            email: "READ MORE"
        },
        {
            id: 18,
            country: " Enhancing Online Learning Platforms",
            address: "The smooth course purchasing, automatic student enrollment, and safe access to instructional materials were made possible by Shopify engineers integrating an LMS with Shopify. ",


            photo: "https://gumlet-blog-content.gumlet.io/learn/content/images/2022/07/Elearning_platform.jpg?w=3840&q=70",
            email: "READ MORE"
        },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(offices.length / itemsPerPage);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const paginatedOffices = offices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


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

                    <Box
                        sx={{
                            gap: 4,
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'repeat(1, 1fr)',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(3, 1fr)',
                            },
                            marginTop: "-4rem"
                        }}
                    >


                        {paginatedOffices.map((office) => (
                            <OfficeCard key={office.id} office={office} />
                        ))}
                    </Box>

                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChangePage}
                        color="primary"
                        sx={{
                            pb: 10,
                            [`& .${paginationClasses.ul}`]: {
                                justifyContent: 'center',
                            },
                            marginTop: "5rem"
                        }}
                    />
                </Container>
            </Box>
        </>
    );
}

// ----------------------------------------------------------------------

function OfficeCard({ office }) {
    const { country, address, photo } = office;

    return (
        <Paper
            component={m.div}
            whileHover="hover"
            sx={{
                borderRadius: 2,
                overflow: 'hidden',

            }}
        >
            <Box sx={{ overflow: 'hidden', cursor: "pointer" }}>
                <m.div variants={varHover()} transition={varTranHover()}>
                    <Image src={photo} alt={country} ratio="4/3" />
                </m.div>
            </Box>

            <Stack spacing={2} sx={{ p: 3 }} component={m.div} variants={{ hover: { opacity: 0.8 } }} >
                <Typography variant="h5" sx={{ mb: 0.5, cursor: "pointer" }}>
                    {country}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5, fontSize: "17px" }}>
                    {address}
                </Typography>
                <Button variant="outlined" color="primary" size="small" href=''>
                    READ MORE
                </Button>



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
