import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import Navbar from "../navbar.js"
import Footer from "../footer.js"

const Main = ({children, router}) => {
    return(
        <Box as = "main" pb = {8}>
            <Head>
                <meta name = "viewport" content = "width = device-width, initial-scale = 1" />
                <title>Kushveer Ramessur</title>
            </Head>

            <Navbar path = {router.asPath} />

            <Container maxW  = "container.xl" pt = {14}>
                {children}
            </Container>

            <Footer />
        </Box>
    )
}

export default Main