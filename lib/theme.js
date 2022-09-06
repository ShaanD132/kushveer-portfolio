import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: {
        body: {
            bg:"#0F1020",
            transitionProperty: "background-color",
            transitionDuration: "normal"
        }
    }
}

const components = {
    Heading: {

        variants: {
            "section-title": {
                fontSize: 50
            },
            "sub-title": {
                fontSize: 35,
                fontFamily: "Zacbel X Medium",
            },
            "page-title": {
                fontSize: 55,
            }
        },
    }
}

const fonts = {
    heading: "'Galhau'",
}

const colors = {
    glassTeal: "#E4EDFF",
    accentColor: "#B7245C",
    dotColor: mode("#3377ff", "#00256e")
}
//5863F8
 

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme