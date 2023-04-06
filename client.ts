import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default sanityClient

const builder = imageUrlBuilder(sanityClient)

export const getImageURL = (source: SanityImageSource) => builder.image(source).url()