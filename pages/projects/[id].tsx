import BackButton from "@components/back-button";
import Header from "@components/layout/header";
import styles from "@styles/pages/projects/view-project.module.scss"
import { NavType, ProjectCardType, ProjectPageType, SanityElement, SkillCardType, SkillsSectionType } from "@utils/content-types"
import { LocaleContentType } from "@utils/data-fetching";
import sanityClient, { getImageURL } from "client";
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react"
import Image from "next/image";
import SkillCard from "@components/cards/skill-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Props {
    navContent: LocaleContentType<NavType>;
    pageContent: LocaleContentType<ProjectPageType>;
    projectData: LocaleContentType<ProjectCardType>;
}

const ViewProject: NextPage<Props> = (
    {
        navContent,
        pageContent,
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
    const pageData = locale == "FR" ? pageContent.fr : pageContent.en

    // used to determine whether to use the title plural or singular

    const countLinks = () => {
        let count = 0
        if(project.website_link) count += 1
        if(project.github_link) count += 1
        if(project.figma_design) count += 1
        return count
    }

    useEffect(() => console.log("project => ", project), [])

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
                <div className={styles.contentContainer}>
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
                        {
                            project.intro_paragraph ?
                            <p>{ project.intro_paragraph }</p>
                            :
                            <></>
                        }
                        <div className={styles.roles}>
                            <h2>{ project.roles.length == 1 ? pageData.roles_section_title_singular : pageData.roles_section_title_plural }</h2>
                            <ul>
                            {
                                project.roles.map((role, index) => (
                                    <li key={`${role}_${index}`}>{role}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </section>

                    <section id="tech-stack-and-links" className={styles.metaData}>
                        <h2>{ project.skills.length == 1 ? pageData.tech_stack_section_title_singular : pageData.tech_stack_section_title_plural }</h2>
                        <ul>
                        {
                            project.skills.map((skill, index) => (
                                <SkillCard 
                                    key={`${skill.name}_${index}`} 
                                    data={skill}
                                    unit="year"
                                    isDarkMode
                                />
                            ))
                        }
                        </ul>
                        <h2>{ countLinks() == 1 ? pageData.links_section_title_singular : pageData.links_section_title_plural }</h2>
                        <ul className={styles.links}>
                        {
                            project.website_link ?
                            <li>
                                <Link href={project.website_link} target="_blank">
                                    <FontAwesomeIcon icon={faGlobe}/>
                                    <p>{pageData.website_link_text}</p>
                                </Link>
                            </li>
                            :
                            <></>
                        }
                        {
                            project.github_link ?
                            <li>
                                <Link href={project.github_link} target="_blank">
                                    <FontAwesomeIcon icon={faGithub}/>
                                    <p>{pageData.github_link_text}</p>
                                </Link>
                            </li>
                            :
                            <></>
                        }
                        {
                            project.figma_design ?
                            <li>
                                <Link href={project.figma_design} target="_blank">
                                    <FontAwesomeIcon icon={faFigma}/>
                                    <p>{pageData.figma_link_text}</p>
                                </Link>
                            </li>
                            :
                            <></>
                        }
                        </ul>
                    </section>
                </div>
            </main>
        </>
    )

} 


interface QueryResponse {
    project: ProjectCardType[];
    nav: NavType[];
    page: ProjectPageType[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

    // get the project name

    const projectName = context.query.id

    // this query allows us to get all the content for the page in one request

    const queryString = `{
        "project": *[_type == "project_card" && name == "${projectName}"] { 
          ..., 
          "skills": skills[]-> 
        },
        "page": *[_type == "project_page"],
        "nav": *[_type == "nav"]
    }`

    const content = await sanityClient.fetch<QueryResponse>(queryString)

    // return props

    return {
        props: {
            navContent: {
                en: content.nav.filter(e => e.lang == "EN")[0],
                fr: content.nav.filter(e => e.lang == "FR")[0]
            },
            pageContent: {
                en: content.page.filter(e => e.lang == "EN")[0],
                fr: content.page.filter(e => e.lang == "FR")[0]
            },
            projectData: {
                en: content.project.filter(e => e.lang == "EN")[0],
                fr: content.project.filter(e => e.lang == "FR")[0]
            }
        }
    }
}

export default ViewProject