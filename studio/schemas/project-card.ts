

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
            name: "title",
            type: "string",
            title: "Project Title"
        },
        {
            name: "description",
            type: "string",
            title: "Description"
        },
        {
            name: "thumbnail",
            type: "image",
            title: "Project Card Thumbnail"
        },
    ]
}