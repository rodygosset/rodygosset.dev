export default {
    name: "skill_card",
    type: "document",
    title: "Skill Card",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name"
        },
        {
            name: "xp_time",
            type: "number",
            title: "Amount Of Experience"
        },
        {
            name: "xp_unit",
            type: "string",
            title: "Unit of time"
        },
        {
            name: "logo",
            type: "image",
            title: "SVG Logo"
        },
    ]
}