import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import { buildFileUrl, parseAssetId } from "@sanity/asset-utils"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { File } from "sanity"

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default sanityClient

const builder = imageUrlBuilder(sanityClient)

export const getImageURL = (source: SanityImageSource) => builder.image(source).url()

export const getFileURL = (source: File) => buildFileUrl(parseAssetId(source.asset?._ref || ""), { projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: "production" })