
export default {
    name: "project_card",
    type: "document",
    title: "Project Card",
    fields: [
        {
            name: "lang",
            type: "string",
            title: "Language"
        },
        {
            name: "name",
            type: "string",
            title: "Project Name"
        },
        {
            name: "display_name",
            type: "string",
            title: "Display Name"
        },
        {
            name: "title",
            type: "string",
            title: "Project Title"
        },
        {
            name: "project_type",
            type: "string",
            title: "Project Type"
        },
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "intro_paragraph",
            type: "text",
            title: "Introduction Paragraph"
        },
        {
            name: 'roles',
            type: 'array',
            of: [
                { type: 'string' }
            ],
            options: {
                layout: 'tags'
            },
            title: 'My roles'
        },
        {
            name: 'skills',
            type: 'array',
            of: [
                { type: 'reference', to: [{ type: 'skill_card' }] }
            ],
            title: 'Tech Stack'
        },
        {
            name: "website_link",
            type: "string",
            title: "Website Link"
        },
        {
            name: "github_link",
            type: "string",
            title: "GitHub Link"
        },
        {
            name: "figma_design",
            type: "string",
            title: "Figma Design Link"
        },
        {
            name: "thumbnail",
            type: "image",
            title: "Project Card Thumbnail"
        },
    ]
}