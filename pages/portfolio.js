import {Container, Box, Heading} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"

const Portfolio = () => {
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section delay = {0.1}>
                    <Box mt = {16}>
                            <Heading as = "h2" fontFamily = "Aspekta" variant = "section-title" color = "#CAE9FF">
                                Portfolio
                            </Heading>

                        <Box align = "justify" px = {10} py = {3} fontSize = {18} fontFamily = "Zacbel X Medium">
                            Fancier Grid Layout
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Portfolio