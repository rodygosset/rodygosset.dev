import Head from 'next/head'
import styles from '@styles/pages/home.module.scss'
import { GetServerSideProps, NextPage } from 'next'
import { useEffect } from 'react'
import { getContactFormContent, getHeroSectionContent, getProjectCardsContent, getSkillCardsContent, getSkillsSectionContent, getWorksSectionContent } from '@utils/data-fetching'

interface Props {
	heroSectionContent: Awaited<ReturnType<typeof getHeroSectionContent>>,
	skillsSectionContent: Awaited<ReturnType<typeof getSkillsSectionContent>>,
	skillCardsContent: Awaited<ReturnType<typeof getSkillCardsContent>>,
	worksSectionContent: Awaited<ReturnType<typeof getWorksSectionContent>>,
	contactFormContent: Awaited<ReturnType<typeof getContactFormContent>>,
	projectCardsContent: Awaited<ReturnType<typeof getProjectCardsContent>>
}

const Home: NextPage<Props> = (
	{
		heroSectionContent,
		skillsSectionContent,
		skillCardsContent,
		worksSectionContent,
		contactFormContent,
		projectCardsContent
	}
) => {

	useEffect(() => {
		console.log(heroSectionContent)
		console.log(skillsSectionContent)
		console.log(skillCardsContent)
		console.log(worksSectionContent)
		console.log(contactFormContent)
		console.log(projectCardsContent)
	}, [])

	// render

	return (
		<>
			<Head>
				<title>Rody Gosset&apos;s portfolio</title>
				<meta name="description" content="Rody Gosset's portfolio - Web developper & designer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main id={styles.main}>
				<h1>Hello, World!</h1>
			</main>
		</>
	)
}

// get data

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  
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
