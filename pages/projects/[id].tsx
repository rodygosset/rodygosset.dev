import BackButton from "@components/back-button";
import Header from "@components/layout/header";
import styles from "@styles/pages/projects/view-project.module.scss"
import { NavType, ProjectCardType } from "@utils/content-types"
import { LocaleContentType } from "@utils/data-fetching";
import sanityClient, { getImageURL } from "client";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
    navContent: LocaleContentType<NavType>,
    projectData: LocaleContentType<ProjectCardType>;
}

const ViewProject: NextPage<Props> = (
    {
        navContent,
        projectData
    }
) => {

    // locale logic

	// access the current locale through the router

	const router = useRouter()

	const determineLocale = () => {
		if(!router.locale) return "EN"
		return router.locale == "fr" ? "FR" : "EN"  
	}

	const locale = determineLocale()

    const getLocaleNavContent = () => locale == "FR" ? navContent.fr : navContent.en 

    const project = locale == "FR" ? projectData.fr : projectData.en

    // render

    return (
        <>
            <Head>
				<title>{project.title} - Rody Gosset&apos;s portfolio</title>
				<meta name="description" content={project.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="shortcut icon" href="favicon/favicon.svg" type="img/svg" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon-180x180.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<meta property="og:title" content={project.title} />
				<meta property="twitter:title" content={project.title} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={project.description} />
				<meta property="twitter:description" content={project.description} />
				<meta property="og:url" content={router.asPath} />
				<meta property="og:image" content={getImageURL(project.thumbnail)} />
			</Head>
			<Header content={getLocaleNavContent()} isDarkMode />
            <main id="main" className={styles.main}>
                <BackButton/>
                <section id="info" className={styles.info}>
                    <div className={styles.thumbnailContainer}>
                        <Image 
                            quality={100}
                            src={getImageURL(project.thumbnail)} 
                            alt={"Rody Gosset's memoji"} 
                            priority
                            fill
                            style={{ 
                                objectFit: "cover", 
                                top: "auto"
                            }}
                        />
                    </div>
                    <div className={styles.title}>
                        <h1>{project.display_name}</h1>
                        <p>{project.project_type}</p>
                    </div>
                    <p>{project.description}</p>
                </section>
            </main>
        </>
    )

} 


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    // get the project name

    const projectName = context.query.id

    const projectContent = await sanityClient.fetch<ProjectCardType[]>(`*[_type == "project_card" && name == "${projectName}"]`)
    const navData = await sanityClient.fetch<NavType[]>('*[_type == "nav"]')

    // return props

    return {
        props: {
            navContent: {
                en: navData.filter(e => e.lang == "EN")[0],
                fr: navData.filter(e => e.lang == "FR")[0]
            },
            projectData: {
                en: projectContent.filter(e => e.lang == "EN")[0],
                fr: projectContent.filter(e => e.lang == "FR")[0]
            }
        }
    }
}

export default ViewProject