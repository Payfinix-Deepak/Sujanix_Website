import { Masonry } from "@mui/lab";
import { Card, Stack, Container, Typography } from "@mui/material";

export default function Sec11() {
    return (
      
            <main style={{ paddingTop: "5rem", paddingBottom: "2rem", marginBottom: "7rem" }}>
                <Container>
                    <Typography variant="h3" style={{ marginLeft: "25rem" }}>
                        Explore Featured Insights
                    </Typography><br />
                    <Masonry columns={3} spacing={4} sx={{ marginLeft: "2rem" }}>
                        <Card style={{ height: "87%", width: "28%", borderRadius: "6px" }}>
                            <Stack>
                                <Typography>

                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rQ9PnMj-X8vo46X_
                                LQRp6rm6WxCS96lnaGKpp0TQ3bzrqJCqjnhOI1A4W-NiZUIELrw&usqp=CAU"  width="100%" height="180px" alt="" />
                                </Typography>
                                <Typography style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                                    12 Best Practices to secure your API in AWS Cloud.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Loreum Ipsum, Loreum
                                </Typography>
                            </Stack>
                        </Card>

                        <Card style={{ height: "87%", width: "28%", borderRadius: "6px" }}>
                            <Stack>
                                <Typography>

                                    <img width="100%" src="data:image/jpeg;base64,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
                                    c53tnOQc9euQD8pFCZ9sT3V0IEQWMyI5hCEgcYEcBAIZgYoQ52pkcYkEmIinlOhO4EEJ3ZOIDUZOJZkNPUyaGX//2Q==" alt="" />
                                </Typography>
                                <Typography style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                                    12 Best Practices to secure your API in AWS Cloud.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Loreum Ipsum, Loreum
                                </Typography>
                            </Stack>
                        </Card>

                        <Card style={{ height: "87%", width: "28%", borderRadius: "6px" }}>
                            <Stack>
                                <Typography>

                                    <img width="100%" src="data:image/jpeg;base64,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
                                    /1gLn85/hSztUY/KqZhV6oLihC/n0qSCqIoI4/lQ4/Coapj50HV8EuiiLhVYNGFZWBIK91sbEEbqDkEHatjd3ausarHoCBttRbJZtRxkZA9CT8a4QSeGfxq2b1rp16+KxH4ePVZF3odreqIwjRByrMwLM2nvhAQVXBPuftY36VpudJi8LM3VpAx2xudRPw61yJb1NCzbVHU66LVtG3n1JvmA5oCaOltXOVoWqqqqoLNSqBqUDAamaDNEpoGA4og1KzUzQOzUpatRCgsmroXNUGz4UDBVjFCtXqFBBRKKAUS0DAaIGlUecUDM4q8k0nVRK9ARNUaBj61YegsZpgfFKZzVk/SgcW+JoVP53/ADml6/X5UYXegM/negJ+HxqdcjNCV670BFs/y+lU23p+fxoXHl9f/FARQU3y3oM0fhVE0A1CTvUBqmago0NTNDmgvNAxqMaAmghNVV1RoJUqqlAQqwaEVYoDzVZqjUoC1VeqlUS0DC3jUBoKi0B5o1FLo1oGGrLUK1KBgahdqSHNHQMBFUXoaBKBxOasNShU8aBjGiUilv4fnyo16UEDeFSqx+fnUegYr4Hnmq14zSqlAQbepny2+FVj8KNjQDq86FmqN1qmoBz41Gqvz91Q0ANUNWapqATVVZqqCVRqGqoKqVKlB//Z"
                                        alt="" />
                                </Typography>
                                <Typography style={{ marginTop: "3rem", marginLeft: "1rem" }}>
                                    12 Best Practices to secure your API in AWS Cloud.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                                </Typography>
                                <Typography style={{ marginTop: "1rem", marginLeft: "1rem" }}>
                                    Loreum Ipsum, Loreum
                                </Typography>
                            </Stack>
                        </Card>
                    </Masonry>

                </Container>

            </main>
        
    )
}