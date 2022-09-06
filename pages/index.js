import {Container, Box, Heading, Flex, Image} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"

const Index = () => {
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section delay = {0.1}>
                    <Box mt = {32}>
                        <Heading as = "h2" fontFamily = "Vetrino" fontSize = {62} color = "#EDF7F6" align = "center">
                            Kushveer Ramessur
                        </Heading>
                        <Box align = "center" fontSize = {38} mt = {0} fontFamily = "Modrnt Urban">
                            UniMelb Architecture Student
                        </Box>
                    </Box>

                    <Box mt = {12}>
                        <Flex direction = "row">
                            <Box align = "center">
                                <Image src = "/images/guru_pfp.jpeg" alt = "Kushveer" w = "100%" />
                            </Box>

                            <Box w = "100%" pl = {20} fontFamily = "Grotesk" fontSize = {19}>
                                Hi, my name is Kushveer. I&apos;m currently in my first year of study at the University of Melbourne, where I&apos;m studying architecture. I&apos;ve always been very passionate about design which can be seen with my background in graphic design. This website contains the projects for 
                            </Box>
                        </Flex>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}
//<img src = "/images/pexels.jpeg" alt = "architecture" className = "home-img"/>

export default Index