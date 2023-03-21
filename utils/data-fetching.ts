import sanityClient from "client"
import { ContactFormType, HeroSectionType, NavType, ProjectCardType, SkillCardType, SkillsSectionType, WorksSectionType } from "./content-types"


export const getSectionContent = async <T>(type: string) => {
    const queryEN = `*[_type=="${type}" && lang=="EN"]`
	const queryFR = `*[_type=="${type}" && lang=="FR"]`

	const contentEN = await sanityClient.fetch<T[]>(queryEN)
	const contentFR = await sanityClient.fetch<T[]>(queryFR)

    return {
		en: contentEN[0],
		fr: contentFR[0]
	}
}

export const getNavContent = () => getSectionContent<NavType>("nav")

export const getHeroSectionContent = () => getSectionContent<HeroSectionType>("hero_section")

export const getSkillsSectionContent = () => getSectionContent<SkillsSectionType>("skills_section")

export const getSkillCardsContent = () => sanityClient.fetch<SkillCardType[]>(`*[_type=="skill_card"]`)

export const getWorksSectionContent = () => getSectionContent<WorksSectionType>("works_section")

export const getContactFormContent = () => getSectionContent<ContactFormType>("contact_form")

export const getProjectCardsContent = async () => {
    const queryEN = `*[_type=="project_card" && lang=="EN"]`
	const queryFR = `*[_type=="project_card" && lang=="FR"]`

	const contentEN = await sanityClient.fetch<ProjectCardType[]>(queryEN)
	const contentFR = await sanityClient.fetch<ProjectCardType[]>(queryFR)

    return {
		en: contentEN,
		fr: contentFR
	}
}