import {Container, Box, Heading, Flex, Image} from "@chakra-ui/react"
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
                    <Box mt = {12}>
                        <Flex direction = "row">
                            <Box align = "center">
                                <Image src = "/images/guru_pfp.jpeg" alt = "Kushveer" w = "100%" />
                            </Box>

                            <Box w = "100%" pl = {20} fontFamily = "Grotesk" fontSize = {21} color = "#EDF7F6">
                                Hi, my name is Kushveer. I&apos;m currently in my first year of study at the <BoldText fs = {22} cl = "#246EB9">University of Melbourne</BoldText>, where I&apos;m studying architecture. I&apos;ve always been very passionate about design which can be seen with my background in graphic design. <br /><br/>This website contains the projects for: <BoldText fs = {21} cl = "#E4572E">Foundations of Design Representation</BoldText>
                            </Box>
                        </Flex>
                    </Box>
                </Section>
            </Container>
        </Layout>
    )
}

export default Index