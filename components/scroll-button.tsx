import Button from "./button"
import Image from "next/image"
import { MouseEvent } from "react"

interface Props {
    children: any;
    sectionId: string;
}

const ScrollButton = (
    {
        children,
        sectionId
    }: Props
) => {

    // handlers

    const handleClick = (e: MouseEvent) => {
        e.preventDefault()
        let section = document.getElementById(sectionId)
        if(!section) return
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    // render

    return (
        <Button
            fancy
            animateOnHover={false}
            onClick={handleClick}>
            <Image 
                quality={100}
                src={'/assets/arrow-down.svg'} 
                alt={"Scroll down"} 
                priority
                width={14}
                height={14}
            />
            <span>{ children }</span>
        </Button>
    )
}
 
export default ScrollButton