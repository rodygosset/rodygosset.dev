import { HeroSectionType } from "@utils/content-types"

interface Props {
    content: HeroSectionType;
}

const HeroSection = (
    {
        content
    }: Props
) => {


    // render

    return (
        <section>
            <div>
                <p>{content.greeting_start}</p>
                <h1>{content.full_name}</h1>
                <p>{content.job_title}</p>
            </div>

            <p>{content.intro}</p>

            <div>
                
            </div>
        </section>
    )
}

export default HeroSection