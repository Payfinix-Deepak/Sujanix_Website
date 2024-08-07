import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from 'src/sections/_marketing/testimonial/marketing-testimonial-item';


// ----------------------------------------------------------------------

export default function HomeTestimonial({ testimonials }) {
    const carousel = useCarousel({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...CarouselDots({
            sx: {
                mt: { xs: 8, md: 10 },
            },
        }),
    });

    return (
        <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
            <Container
                sx={{
                    position: 'relative',
                    py: { xs: 10, md: 15 },
                }}
            >
                <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                        Testimonials and Success Stories
                    </Typography>

                    <Typography variant="h2">Hear from Our Clients</Typography>
                </Stack>

                <CarouselArrows
                    onNext={carousel.onNext}
                    onPrev={carousel.onPrev}
                    leftButtonProps={{
                        sx: {
                            opacity: { xs: 0, md: 1 },
                        },
                    }}
                    rightButtonProps={{
                        sx: {
                            opacity: { xs: 0, md: 1 },
                        },
                    }}
                >
                    <Grid container spacing={10} justifyContent="center">
                        <Grid xs={12} md={8}>
                            <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                                {testimonials.map((testimonial) => (
                                    <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                                ))}
                            </Carousel>
                        </Grid>
                    </Grid>
                </CarouselArrows>
            </Container>
        </Box>
    );
}

HomeTestimonial.propTypes = {
    testimonials: PropTypes.array,
};
