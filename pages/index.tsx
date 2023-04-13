import Head from 'next/head'
import styles from '@styles/pages/home.module.scss'
import { GetServerSideProps, NextPage } from 'next'
import { LocaleContentType, getContent } from '@utils/data-fetching'
import { useRouter } from 'next/router'
import HeroSection from '@components/sections/hero'
import Header from '@components/layout/header'
import SkillsSection from '@components/sections/skills'
import WorksSection from '@components/sections/works'
import ContactSection from '@components/sections/contact'
import { ContactFormType, HeroSectionType, NavType, ProjectCardType, SkillCardType, SkillsSectionType, WorksSectionType } from '@utils/content-types'

interface Props {
	navContent: LocaleContentType<NavType>,
	heroSectionContent: LocaleContentType<HeroSectionType>,
	skillsSectionContent: LocaleContentType<SkillsSectionType>,
	skillCardsContent: SkillCardType[],
	worksSectionContent: LocaleContentType<WorksSectionType>,
	projectCardsContent: LocaleContentType<ProjectCardType[]>,
	contactFormContent: LocaleContentType<ContactFormType>
}

const Home: NextPage<Props> = (
	{
		navContent,
		heroSectionContent,
		skillsSectionContent,
		skillCardsContent,
		worksSectionContent,
		projectCardsContent,
		contactFormContent
	}
) => {

	// manage locale, as our page content is available in English and French

	// access the current locale through the router

	const router = useRouter()

	const determineLocale = () => {
		if(!router.locale) return "EN"
		return router.locale == "fr" ? "FR" : "EN"  
	}

	const locale = determineLocale()

	// useEffect(() => console.log("router locale => " + router.locale), [router.locale])

	// useEffect(() => console.log("current locale => " + locale), [locale])

	// the following functions are simple helpers to get locale dependent content
	// that we can directly pass down to our section components

	const getLocaleNavContent = () => locale == "FR" ? navContent.fr : navContent.en 
	const getLocaleHeroSectionContent = () => locale == "FR" ? heroSectionContent.fr : heroSectionContent.en
	const getLocaleSkillsSectionContent = () => locale == "FR" ? skillsSectionContent.fr : skillsSectionContent.en
	const getLocaleWorksSectionContent = () => locale == "FR" ? worksSectionContent.fr : worksSectionContent.en
	const getLocaleProjectCardsContent = () => locale == "FR" ? projectCardsContent.fr : projectCardsContent.en
	const getLocaleContactFormContent = () => locale == "FR" ? contactFormContent.fr : contactFormContent.en


	// @ts-ignore
	const getSectionId = (section: string) => getLocaleNavContent()[`${section}_section_id`]

	const metaTitle = "Rody Gosset's portfolio"
	const metaDescription = "Rody Gosset's portfolio - Web developper & designer"

	// render

	return (
		<>
			<Head>
				<title>Rody Gosset&apos;s portfolio</title>
				<meta name="description" content={metaDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="favicon/favicon.svg" type="img/svg" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-180x180.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<meta property="og:title" content={metaTitle} />
				<meta property="twitter:title" content={metaTitle} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={metaDescription} />
				<meta property="twitter:description" content={metaDescription} />
				<meta property="og:url" content="https://www.rodygosset.dev/" />
				<meta property="og:image" content="https://www.rodygosset.dev/images/my-memoji-rectangle.png" />
				<meta property="twitter:image" content="https://www.rodygosset.dev/images/my-memoji-rectangle.png" />
			</Head>
			<Header content={getLocaleNavContent()} />
			<main id={styles.main}>
				<HeroSection id={getSectionId("hero")} content={getLocaleHeroSectionContent()} />
				<SkillsSection
					id={getSectionId("skills")}
					content={getLocaleSkillsSectionContent()}
					cards={skillCardsContent} 
				/>
				<WorksSection 
					id={getSectionId("works")}
					content={getLocaleWorksSectionContent()} 
					projects={getLocaleProjectCardsContent()}
				/>
				<ContactSection
					id={getSectionId("contact")}
					content={getLocaleContactFormContent()}
				/>
			</main>
		</>
	)
}

// get page content

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

	// the data fetching logic, using the sanity client
	// was exported to helper function in the utils/data-fetching.ts file
	// to keep this function minimal

	const pageContent = await getContent()
  
	return {
		props: {
			navContent: pageContent.nav,
			heroSectionContent: pageContent.heroSection,
			skillsSectionContent: pageContent.skillsSection,
			skillCardsContent: pageContent.skillCards,
			worksSectionContent: pageContent.worksSection,
			contactFormContent: pageContent.contactForm,
			projectCardsContent: pageContent.projectCards
		},
	}
  }

export default Home
