import Link from "next/link"
import Image from "next/image"
import styled from "@emotion/styled"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
img {
    transition: all 0.3s ease;
}

&:hover img {
    transform: scale(1.05) rotate(-5deg);
}`

const Logo = () => {
    const Logo = `/images/kr_white.png`
    return(
        <Link href = "/">
            <a>
                <LogoBox>
                    <Image src = {Logo} width = {45} height = {25} alt = "logo"/>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo