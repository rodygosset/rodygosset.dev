import Head from 'next/head'
import styles from '@styles/pages/home.module.scss'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { getContactFormContent, getHeroSectionContent, getProjectCardsContent, getSkillCardsContent, getSkillsSectionContent, getWorksSectionContent } from '@utils/data-fetching'
import { useRouter } from 'next/router'
import HeroSection from '@components/sections/hero'
import Header from '@components/layout/header'
import SkillsSection from '@components/sections/skills'

interface Props {
	heroSectionContent: Awaited<ReturnType<typeof getHeroSectionContent>>,
	skillsSectionContent: Awaited<ReturnType<typeof getSkillsSectionContent>>,
	skillCardsContent: Awaited<ReturnType<typeof getSkillCardsContent>>,
	worksSectionContent: Awaited<ReturnType<typeof getWorksSectionContent>>,
	projectCardsContent: Awaited<ReturnType<typeof getProjectCardsContent>>
	contactFormContent: Awaited<ReturnType<typeof getContactFormContent>>,
}

const Home: NextPage<Props> = (
	{
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

	useEffect(() => console.log("router locale => " + router.locale), [router.locale])

	useEffect(() => console.log("current locale => " + locale), [locale])

	// the following functions are simple helpers to get locale dependent content
	// that we can directly pass down to our section components

	const getLocaleHeroSectionContent = () => locale == "FR" ? heroSectionContent.fr : heroSectionContent.en
	const getLocaleSkillsSectionContent = () => locale == "FR" ? skillsSectionContent.fr : skillsSectionContent.en
	const getLocaleWorksSectionContent = () => locale == "FR" ? worksSectionContent.fr : worksSectionContent.en
	const getLocaleProjectCardsContent = () => locale == "FR" ? projectCardsContent.fr : projectCardsContent.en
	const getLocaleContactFormContent = () => locale == "FR" ? contactFormContent.fr : contactFormContent.en

	// render

	return (
		<>
			<Head>
				<title>Rody Gosset&apos;s portfolio</title>
				<meta name="description" content="Rody Gosset's portfolio - Web developper & designer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Header/>
			<main id={styles.main}>
				<HeroSection content={getLocaleHeroSectionContent()} />
				<SkillsSection
					content={getLocaleSkillsSectionContent()}
					cards={skillCardsContent} 
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
  
	return {
		props: {
			heroSectionContent: await getHeroSectionContent(),
			skillsSectionContent: await getSkillsSectionContent(),
			skillCardsContent: await getSkillCardsContent(),
			worksSectionContent: await getWorksSectionContent(),
			contactFormContent: await getContactFormContent(),
			projectCardsContent: await getProjectCardsContent()
		},
	}
  }

export default Home
