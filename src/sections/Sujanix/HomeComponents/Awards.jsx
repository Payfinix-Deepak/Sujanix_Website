
import { Container, Grid, Stack, Typography } from "@mui/material";

export default function Awards() {
    return (
        <>
            <main style={{ padding: "5rem", textAlign: "center" }}>
                <Container>

                    <Typography variant="h3" fontFamily="sans-serif" sx={{ fontSize: "26px" }}>
                        Recent Awards & Certifications
                    </Typography> <br /><br />
                    <Grid xs={12}
                        md={12}
                        lg={6}>
                        <Stack direction="row" style={{ justifyContent: "center" }} spacing={6}>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/ft-logo-2023.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/clutch-global-2023-logo-optimized.png" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/tet-2023-logo.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/new-award-4.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/new-award-11.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/adobe-bronze.svg" height="65px" />
                            </Typography>
                        </Stack>
                    </Grid>
                    <br /><br />
                    <Grid xs={12}
                        md={12}
                        lg={6}>
                        <Stack direction="row" style={{ justifyContent: "center" }} spacing={6}>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/eba-logo-new.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/new-award-6.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/new-award-8.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/new-award-9.svg" height="65px" />
                            </Typography>
                            <Typography>
                                <img alt="" src="https://www.capitalnumbers.com/images/common/clutch-champion-2023-logo-optimized.png" height="65px" />
                            </Typography>

                        </Stack>
                    </Grid>
                </Container>
            </main>
        </>
    )
}