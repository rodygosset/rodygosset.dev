
import Button from "@components/button"
import styles from "@styles/layout/header.module.scss"
import Link from "next/link"
import { ReactSVG } from "react-svg"
import { useEffect, useState } from "react"
import { NavType } from "@utils/content-types"
import { faDownload, faLanguage, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import { getFileURL } from "client"

interface NavItem {
    label: string;
    sectionId: string;
}

interface Props {
    content: NavType;
    isDarkMode?: boolean;
}

const Header = (
    {
        content,
        isDarkMode
    }: Props
) => {

    // get the current route

    const router = useRouter()

    // state

    const [darkMode, setDarkMode] = useState(isDarkMode || false)
    const [navOpen, setNavOpen] = useState(false)

    const [currentSectionId, setCurrentSectionId] = useState(router.pathname === '/' ? content.hero_section_id : "")

    // event listeners for scroll based effects

    useEffect(() => {

        if(router.pathname !== '/') return

        // get all main page sections

        const heroSection = document.getElementById(content.hero_section_id)
        const skillsSection = document.getElementById(content.skills_section_id)
        const worksSection = document.getElementById(content.works_section_id)
        const contactSection = document.getElementById(content.contact_section_id)

        const mainPageSections = [heroSection, skillsSection, worksSection, contactSection]

        // dertermine which section is currently visible

        const isCurrentSection = (section: typeof heroSection) => {
            if(!section) return false
            const { top } = section.getBoundingClientRect()
            return top - 30 < (window.innerHeight / 2)
        }

        // get each section

        const updateCurrentSection = () => {
            for(const section of mainPageSections) {
                if(section && isCurrentSection(section)) setCurrentSectionId(section.id)
            }
        }

        document.addEventListener('scroll', updateCurrentSection, true)

        // turn the svgs white when we scroll past the Works section

        const onScroll = () => {
            if(!worksSection) return
            const top = worksSection.getBoundingClientRect().top
            setDarkMode(top - 30 <= 0)
        }
        document.addEventListener('scroll', onScroll, true)



        return () => {
            document.removeEventListener('scroll', onScroll, true)
            document.removeEventListener('scroll', updateCurrentSection, true)
        }
    }, [])

    const navItems: NavItem[] = [
        {
            label: content.hero_section_label,
            sectionId: content.hero_section_id
        },
        {
            label: content.skills_section_label,
            sectionId: content.skills_section_id
        },
        {
            label: content.works_section_label,
            sectionId: content.works_section_id
        },
        {
            label: content.contact_section_label,
            sectionId: content.contact_section_id
        }
    ]

    // handlers

    const handleNavLinkClick = (sectionId: string) => {
        let section = document.getElementById(sectionId)
        if(!section) return
        setNavOpen(false)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    // utils

    const getLocale = () => router.locale == "fr" ? "en-US" : "fr"

    const openNav = () => setNavOpen(true)
    const closeNav = () => setNavOpen(false)


    const getContainerClassNames = () => {
        let classNames = ""
        classNames += darkMode ? styles.darkMode : ''
        classNames += navOpen ? ' ' + styles.navOpen : ''
        return classNames
    }

    const getHeaderClassNames = () => {
        let classNames = ""
        classNames += darkMode ? styles.darkMode : ''
        classNames += navOpen ? ' ' + styles.navOpen : ''
        return classNames
    }

    const getNavClassNames = () => {
        let classNames = ""
        classNames += darkMode ? styles.darkMode : ''
        classNames += !navOpen ? ' ' + styles.hidden : ''
        return classNames
    }

    const isCurrent = (sectionId: string) => sectionId == currentSectionId

    // render

    return (
        <div id={styles.headerContainer} className={getContainerClassNames()}>
            <header id={styles.header} className={getHeaderClassNames()}>
                <Link href="/">
                    <ReactSVG src="/assets/logo.svg" />
                </Link>
                <Button
                    hasPadding={false}
                    animateOnHover={false}
                    role="tertiary"
                    onClick={openNav}>
                    <ReactSVG src="/assets/burger.svg" />
                </Button>
            </header>

            <div id={styles.navContainer} className={getContainerClassNames()}>
                <nav className={getNavClassNames()}>
                    <Button
                        icon={faXmark}
                        hasPadding={false}
                        animateOnHover={false}
                        role="tertiary"
                        onClick={closeNav}>
                    </Button>
                    <ul>
                    {
                        navItems.map((item, index) => (
                            <li 
                                className={isCurrent(item.sectionId) ? styles.current : ''}
                                onClick={() => handleNavLinkClick(item.sectionId)}
                                key={index}>
                                <span>0{index+1}/</span> 
                                <Link 
                                    onClick={e => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        handleNavLinkClick(item.sectionId)
                                    }}
                                    href={`/#${item.sectionId}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                    <li className={styles.link}>
                        <Link href={router.asPath} onClick={closeNav} locale={getLocale()}>
                            <FontAwesomeIcon icon={faLanguage}/>
                            { content.lang_button_text }
                        </Link>
                    </li>
                    <li className={styles.link} onClick={closeNav}>
                        <Link href={getFileURL(content.resume)} target="_blank" locale="en-US">
                            <FontAwesomeIcon icon={faDownload}/>
                            { content.resume_link_text }
                        </Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header