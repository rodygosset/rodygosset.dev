import { createClient } from "@sanity/client"

export default createClient({
    projectId: "7qyfdja9",
    dataset: "production",
    useCdn: false
})