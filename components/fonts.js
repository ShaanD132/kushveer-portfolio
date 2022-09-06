import {Global} from "@emotion/react"

const Fonts = () => (
    <Global
    styles = {`
    @font-face {
        font-family: "Kunika";
        src:
            url("/fonts/Kunika-Regular.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Aspekta";
        src:
            url("/fonts/Aspekta-650.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Vetrino";
        src:
            url("/fonts/Vetrino.otf")
            format("opentype");
    }

    @font-face {
        font-family: "Grotesk";
        src:
            url("/fonts/Gortesk1001GX.ttf")
            format("truetype");
    }

    @font-face {
        font-family: "Modrnt Urban";
        src:
            url("/fonts/modrnt_urban.ttf")
            format("truetype");
    }
    `} />
)

export default Fonts