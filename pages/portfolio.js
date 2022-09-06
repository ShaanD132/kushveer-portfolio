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
                                Kushveer Ramessur
                            </Heading>

                        <Box align = "justify" px = {10} py = {3} fontSize = {18} fontFamily = "Zacbel X Medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat mauris. Integer lectus lacus, faucibus at gravida ut, mollis eu elit. Nulla posuere metus nulla, sed elementum ipsum porttitor sit amet. Mauris in viverra eros. Vivamus posuere arcu vel massa volutpat luctus. Duis id augue a nunc porttitor lobortis.
                        </Box>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Portfolio