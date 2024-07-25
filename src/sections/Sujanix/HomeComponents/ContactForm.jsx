import { Card,Grid, Stack, Container, TextField, Typography } from "@mui/material";


export default function ContactForm() {
    return (
     
            <main className="bg" style={{ padding: "9rem" }}>

                <Container>
                    <Typography variant="h2" style={{ marginLeft: "15rem", color: "white" }}>
                        We&apos;d Love To Hear From You
                    </Typography><br />
                    <Typography variant="h5" style={{ fontSize: "22px", marginLeft: "4rem", color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.
                        <span>Cum sociis natoque,
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </span>
                    </Typography>

                </Container>
                <br />
                <Container>


                    <Grid container>
                        <Grid xs={6}>
                            <Card style={{ backgroundColor: "#142629", color: "white", padding: "2rem", height: "110%", borderRadius: "1px" }}>
                                <Stack style={{ marginTop: "3rem" }}>
                                    <Typography variant="h3" fontFamily="sans-serif">
                                        What can we help you with?

                                    </Typography><br />
                                    <Typography variant="body" fontFamily="sans-serif">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                    </Typography>

                                </Stack>


                                <Stack direction="row" spacing={3} style={{ marginTop: "8rem" }}>
                                    <Typography>
                                        <img src="https://www.capitalnumbers.com/images/common/new-form-icon-1.svg" alt="" />
                                    </Typography>
                                    <Typography>
                                        <Stack>
                                            <Typography>
                                                700+
                                            </Typography>
                                            <Typography>
                                                Loreum Ipsum
                                            </Typography>
                                        </Stack>
                                    </Typography>
                                    <Typography>
                                        <img src="https://www.capitalnumbers.com/images/common/new-form-icon-2.svg" alt="" />
                                    </Typography>
                                    <Typography>
                                        <Stack>
                                            <Typography>
                                                700+
                                            </Typography>
                                            <Typography>
                                                Loreum Ipsum
                                            </Typography>
                                        </Stack>
                                    </Typography>
                                </Stack>
                                <br />
                                <Stack direction="row" spacing={3}>
                                    <Typography>
                                        <img src="https://www.capitalnumbers.com/images/common/new-form-icon-1.svg" alt="" />
                                    </Typography>
                                    <Typography>
                                        <Stack>
                                            <Typography>
                                                700+
                                            </Typography>
                                            <Typography>
                                                Loreum Ipsum
                                            </Typography>
                                        </Stack>
                                    </Typography>
                                    <Typography>
                                        <img src="https://www.capitalnumbers.com/images/common/new-form-icon-2.svg" alt="" />
                                    </Typography>
                                    <Typography>
                                        <Stack>
                                            <Typography>
                                                700+
                                            </Typography>
                                            <Typography>
                                                Loreum Ipsum
                                            </Typography>
                                        </Stack>
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>

                        <Grid xs={6}>
                            <Card style={{ backgroundColor: "#fff", color: "white", padding: "2rem", height: "110%", borderRadius: "1px" }}>
                                <Stack spacing={4} style={{ marginLeft: "2rem", marginTop: "3rem" }}>
                                    <Typography >
                                        <Stack>

                                            <Typography>
                                                <TextField id="standard-basic" label="Name *" variant="standard" style={{ width: "80%" }} />
                                            </Typography>
                                        </Stack>

                                    </Typography>
                                    <Typography>
                                        <TextField id="standard-basic" label="Work Email *" variant="standard" style={{ width: "80%" }} />
                                    </Typography>
                                    <Typography>
                                        <TextField id="standard-basic" label="Mobile Number" variant="standard" style={{ width: "80%" }} />
                                    </Typography>
                                    <Typography>
                                        <TextField id="standard-basic" label="Company" variant="standard" style={{ width: "80%" }} />
                                    </Typography>
                                    <Typography>
                                        <TextField id="standard-basic" label="Your Message/ Requirements" variant="standard" style={{ width: "80%" }} />
                                    </Typography>
                                </Stack>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        
    )
}