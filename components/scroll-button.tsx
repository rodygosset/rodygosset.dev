import Button from "./button"
import Image from "next/image"

interface Props {
    children: any;
    onClick: () => void;
}

const ScrollButton = (
    {
        children,
        onClick
    }: Props
) => {

    // render

    return (
        <Button
            fancy
            animateOnHover={false}
            onClick={onClick}>
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