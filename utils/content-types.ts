import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SanityElement {
    _type: string;
    lang?: "EN" | "FR";
}


export interface NavType extends SanityElement {
    lang: "EN" | "FR";
    hero_section_label: string;
    hero_section_id: string;
    skills_section_label: string;
    skills_section_id: string;
    works_section_label: string;
    works_section_id: string;
    contact_section_label: string;
    contact_section_id: string;
    lang_button_text: string;
    resume_link_text: string;
    resume_link: string;
}

export interface HeroSectionType extends SanityElement {
    lang: "EN" | "FR";
    greeting_start: string;
    full_name: string;
    job_title: string;
    intro: string;
    email: string;
    email_copy_message: string;
    email_copy_success_message: string;
    github_link: string;
    linkedin_link: string;
    buttonText: string;
}

export interface SkillsSectionType extends SanityElement {
    lang: "EN" | "FR";
    section_title: string;
    intro: string;
    buttonText: string;
    header: string;
    header_caption: string;
    year_unit_label_singular: string;
    year_unit_label_plural: string;
    month_unit_label_singular: string;
    month_unit_label_plural: string;
    skill_card_cta_text: string;
}

export interface SkillCardType extends SanityElement {
    name: string;
    xp_time: number;
    xp_unit: "Y" | "M";
    logo: SanityImageSource;
    logo_darkmode?: SanityImageSource; 
}

export interface WorksSectionType extends SanityElement {
    lang: "EN" | "FR";
    section_title: string;
    hero_text_caption_1: string;
    hero_text: string;
    hero_text_caption_2: string;
    project_card_cta_text: string;
}

export interface ContactFormType extends SanityElement {
    lang: "EN" | "FR";
    section_title: string;
    caption: string;
    name_label: string;
    email_label: string;
    phone_label: string;
    message_label: string;
    submit_button_text: string;
    validation_error_message: string;
}

export interface ProjectCardType extends SanityElement {
    lang: "EN" | "FR";
    name: string;
    display_name: string;
    title: string;
    project_type: string;
    description: string;
    intro_paragraph: string;
    roles: string[];
    skills: SkillCardType[];
    website_link: string;
    github_link: string;
    figma_design: string; // link
    thumbnail: SanityImageSource;
}

export interface ProjectPageType extends SanityElement {
    lang: "EN" | "FR";
    roles_section_title_singular: string;
    roles_section_title_plural: string;
    tech_stack_section_title_singular: string;
    tech_stack_section_title_plural: string;
    links_section_title_singular: string;
    links_section_title_plural: string;
    website_link_text: string;
    github_link_text: string;
    figma_link_text: string;
}