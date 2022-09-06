import  {AnimatePresence, motion} from "../node_modules/framer-motion"
import { IconButton, useColorMode, useColorModeValue} from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"


const ThemeToggle = () => {
    const {toggleColorMode} = useColorMode()
    const ThemeButtonColors = useColorModeValue("#e4edff","#fdf0bd")

    return(
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
            style={{ display: 'inline-block' }}
            key={useColorModeValue('light', 'dark')}
            initial={{ y:0, rotate: -180, opacity: 0 }}
            animate={{ rotate: -360, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle theme"
                    bg = {useColorModeValue('accentColor', '#fbe384')}
                    color = {useColorModeValue ("black", "black")}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    _hover={{ bg: ThemeButtonColors }}
                    my = {1}
                />
            </motion.div>
      </AnimatePresence>
    )
}

export default ThemeToggle