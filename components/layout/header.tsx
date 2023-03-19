
import Button from "@components/button"
import styles from "@styles/layout/header.module.scss"
import Link from "next/link"
import { ReactSVG } from "react-svg"
import { useEffect, useState } from "react"

const Header = () => {

    const [darkMode, setDarkMode] = useState(false)

    // turn the svgs white when we scroll past the Works section

    useEffect(() => {

        const onScroll = () => {
            const worksSection = document.getElementById("works")
            if(!worksSection) return
            const top = worksSection.getBoundingClientRect().top
            setDarkMode(top - 30 <= 0)
        }
        document.addEventListener('scroll', onScroll, true)

        return () => document.removeEventListener('scroll', onScroll, true)
    }, [])


    // render

    return (
        <header id={styles.header} className={darkMode ? styles.darkMode : ''}>
            <Link href="/">
                <ReactSVG src="/assets/logo.svg" />
            </Link>
            <Button
                hasPadding={false}
                animateOnHover={false}
                role="tertiary"
                onClick={() => {}}>
                <ReactSVG src="/assets/burger.svg" />
            </Button>
        </header>
    )
}

export default Header