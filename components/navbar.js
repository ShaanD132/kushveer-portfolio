import Logo from "./logo"
import NextLink from "next/link"
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const LinkItem = ({href, path, children}) => {
    const active = path === href
    return(
        <NextLink href = {href} >
            <Link
            py = {1.5}
            px = {3}
            fontSize = {17.5}
            borderRadius = {12}
            fontFamily = "Aspekta"
            textDecoration = {active ? "underline" : "none"}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box position = "fixed"
        as = "nav"
        w = "100%"

        style = {{backdropFilter: "blur(10px)"}}
        zIndex = {1}
        {...props}>

            <Container display = "flex"
            px = {2} py = {4} maxW = "container.lg"
            wrap = "wrap"
            align = "center"
            justify = "space-between">
                <Flex align = "center" mt = {1.5} mr = {2}>
                    <Heading as = "h1" size = "lg">
                        <Logo/>
                    </Heading>
                </Flex>

                <Box>
                    <Stack
                    direction = {{base: "column", md: "row"}}
                    width = {{base: "full", md: "auto"}}
                    display = {{base: "none", md: "flex"}}
                    align = "center"
                    alignItems = "center"
                    flexGrow = {1}
                    spacing = {16}
                    ml = {5}
                    mt = {{base: 4, md: 1}}
                    className = "navbar-links"
                    >

                    <LinkItem href = "/portfolio" path = {path}>
                            Portfolio
                    </LinkItem>

                    <LinkItem href = "/resume" path = {path}>
                        Resume
                    </LinkItem>

                    <LinkItem href = "/contact" path = {path}>
                        Contact Me
                    </LinkItem>
                    </Stack>
                </Box>

                <Box flex = {1} align = "right">
                    <Box ml = {2} display = {{base: "inline-block", md: "none"}}>
                        <Menu>
                            <MenuButton as = {IconButton} icon = {<HamburgerIcon/>} variant = "outline" aria-label = "Options" />
                            <MenuList bg = {useColorModeValue("#F0E68C", "#555555")}>
                                <NextLink href = "/" passHref>
                                    <MenuItem as = {Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href = "/portfolio" passHref>
                                    <MenuItem as = {Link}>Portfolio</MenuItem>
                                </NextLink>
                                <NextLink href = "/resume" passHref>
                                    <MenuItem as = {Link}>Resume</MenuItem>
                                </NextLink>
                                <NextLink href = "/contact" passHref>
                                    <MenuItem as = {Link}>Contact Me</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Navbar