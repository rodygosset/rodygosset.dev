import sanityClient from "client"
import { ContactFormType, HeroSectionType, NavType, ProjectCardType, SanityElement, SkillCardType, SkillsSectionType, WorksSectionType } from "./content-types"

export interface LocaleContentType<T> {
	en: T;
	fr: T;
}

interface Content {
	nav: LocaleContentType<NavType>;
	heroSection: LocaleContentType<HeroSectionType>;
	skillsSection: LocaleContentType<SkillsSectionType>;
	worksSection: LocaleContentType<WorksSectionType>;
	contactForm: LocaleContentType<ContactFormType>;
	projectCards: LocaleContentType<ProjectCardType[]>;
	skillCards: SkillCardType[];
}

export const getContent = async () => {

	const content = await sanityClient.fetch<SanityElement[]>('*[_type != "project_page"]')

	const contentEN = content.filter(e => typeof e.lang !== "undefined" && e.lang == "EN")
	const contentFR = content.filter(e => typeof e.lang !== "undefined" && e.lang == "FR")
	
	const structuredContent: Content = {
		nav: {
			en: contentEN.filter(e => e._type == 'nav')[0] as NavType,
			fr: contentFR.filter(e => e._type == 'nav')[0] as NavType
		},
		heroSection: {
			en: contentEN.filter(e => e._type == 'hero_section')[0] as HeroSectionType,
			fr: contentFR.filter(e => e._type == 'hero_section')[0] as HeroSectionType
		},
		skillsSection: {
			en: contentEN.filter(e => e._type == 'skills_section')[0] as SkillsSectionType,
			fr: contentFR.filter(e => e._type == 'skills_section')[0] as SkillsSectionType
		},
		worksSection: {
			en: contentEN.filter(e => e._type == 'works_section')[0] as WorksSectionType,
			fr: contentFR.filter(e => e._type == 'works_section')[0] as WorksSectionType
		},
		contactForm: {
			en: contentEN.filter(e => e._type == 'contact_form')[0] as ContactFormType,
			fr: contentFR.filter(e => e._type == 'contact_form')[0] as ContactFormType
		},
		projectCards: {
			en: contentEN.filter(e => e._type == 'project_card') as ProjectCardType[],
			fr: contentFR.filter(e => e._type == 'project_card') as ProjectCardType[]
		},
		skillCards: await getSkillCardsContent()
	}

	return structuredContent

}

export const getSkillCardsContent = () => sanityClient.fetch<SkillCardType[]>(`*[_type=="skill_card"]`)
