import {Container, Box, Heading, Flex, Image, Spacer} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/layouts/section"

const BoldText = ({children, fs, td, cl}) => {
    return(
        <Box fontSize = {fs} textDecoration = {td} color = {cl} letterSpacing = "normal" className = "bold-text">
            {children}
        </Box>
    )
}

const Index = () => {
    return(
        <Layout>
            <Container maxW = "container.lg">
                <Section>
                    <Box mt = {28}>
                        <Heading as = "h2" fontFamily = "Vetrino" fontSize = {{base: 48, md: 56, lg: 62}} color = "#EDF7F6" align = "center" fontWeight = "normal" letterSpacing = "normal">
                            Kushveer Ramessur
                        </Heading>
                        <Box align = "center" fontSize = {{base: 28, md: 32, lg: 38}} mt = {0} fontFamily = "Modrnt Urban" color = "#EDF7F6">
                            UniMelb Architecture Student
                        </Box>
                    </Box>
                </Section>

                <Section delay = {0.8}>
                    <Box mt = {14}>
                        <Flex direction = "row">
                            <Box align = "center">
                                <Image src = "/images/guru_pfp.jpeg" alt = "Kushveer" w = "100%" />
                            </Box>

                            <Box w = "100%" pl = {20} fontFamily = "Grotesk" fontSize = {{base: 16, md: 18, lg: 21}} color = "#EDF7F6">
                                Hi, I&apos;m Kushveer. I&apos;m currently in my first year of study at the <BoldText fs = {22} cl = "#246EB9">University of Melbourne</BoldText>, where I&apos;m studying architecture. I&apos;ve always been very passionate about design which can be seen with my background in graphic design. <br /><br/>This website contains the projects for: <BoldText fs = {21} cl = "#E4572E">Foundations of Design Representation</BoldText>
                            </Box>
                        </Flex>
                    </Box>
                </Section>

                <Flex mt = {40}>
                    <Section delay = {1}>
                        <Box>
                            <Heading as = "h2" fontFamily = "Vetrino" fontSize = {{base: 28, md: 32, lg: 55}} color = "#EDF7F6" align = "left" fontWeight = "normal" letterSpacing = "normal">
                                Modules
                            </Heading>

                            <Box pl = {7} mt = {4} align = "left">
                                <Heading as = "h3"  fontFamily = "Grotesk" fontSize = {{base: 16, md: 18, lg: 22}} fontWeight = "normal" letterSpacing = "normal">
                                    M1: How to Draw a Croissant
                                </Heading>

                                <Heading as = "h3" fontFamily = "Grotesk" fontSize = {{base: 16, md: 18, lg: 22}} mt = {6} fontWeight = "normal" letterSpacing = "normal">
                                    M2: Flatness vs Projection
                                </Heading>

                                <Heading as = "h3" fontFamily = "Grotesk" fontSize = {{base: 16, md: 18, lg: 22}} mt = {6} fontWeight = "normal" letterSpacing = "normal">
                                    M3: Surface vs Pattern
                                </Heading>

                                <Heading as = "h3" fontFamily = "Grotesk" fontSize = {{base: 16, md: 18, lg: 22}} mt = {6} fontWeight = "normal" letterSpacing = "normal">
                                    M4: Frame vs Field
                                </Heading>
                            </Box>
                        </Box>
                    </Section>

                    <Spacer />

                    <Section delay = {1.2}>
                        <Box className = "portfolio-link">
                            <Heading as = "h2" fontFamily = "Vetrino" fontSize = {{base: 28, md: 32, lg: 55}} color = "#EDF7F6" align = "left" fontWeight = "normal" letterSpacing = "normal" className = "portfolio-heading">
                                Portfolio
                            </Heading>

                            <Box mt = {10} align = "left">
                                Grid Layout for projects (different views) and go to their indiv pages
                            </Box>
                        </Box>
                    </Section>
                </Flex>

            </Container>
        </Layout>
    )
}

export default Index