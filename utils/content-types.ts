import { SanityImageSource } from "@sanity/image-url/lib/types/types";


export interface NavType {
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

export interface HeroSectionType {
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

export interface SkillsSectionType {
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

export interface SkillCardType {
    name: string;
    xp_time: number;
    xp_unit: "Y" | "M";
    logo: SanityImageSource;
}

export interface WorksSectionType {
    lang: "EN" | "FR";
    section_title: string;
    hero_text_caption_1: string;
    hero_text: string;
    hero_text_caption_2: string;
    project_card_cta_text: string;
}

export interface ContactFormType {
    lang: "EN" | "FR";
    section_title: string;
    caption: string;
    name_label: string;
    email_label: string;
    phone_label: string;
    message_label: string;
    submit_button_text: string;
}

export interface ProjectCardType {
    lang: "EN" | "FR";
    name: string;
    title: string;
    description: string;
    thumbnail: SanityImageSource;
}