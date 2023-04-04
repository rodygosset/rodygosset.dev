import { HTMLMotionProps } from "framer-motion"

export const fadeIn: HTMLMotionProps<'div'> = {
    initial: {
        opacity: 0
    },
    whileInView: {
        opacity: 1
    },
    transition: {
        duration: 1
    }
}

export const slideInLeft: HTMLMotionProps<'div'> = {
    initial: {
        opacity: 0,
        x: -200
    },
    whileInView: {
        opacity: 1,
        x: 0
    },
    transition: {
        duration: 0.5
    }
}



export const slideInRight: HTMLMotionProps<'div'> = {
    initial: {
        opacity: 0,
        x: 200
    },
    whileInView: {
        opacity: 1,
        x: 0
    },
    transition: {
        duration: 0.5
    }
}

export const slideInUp: HTMLMotionProps<'div'> = {
    initial: {
        opacity: 0,
        y: 100
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: 0.5
    }
}

export const slideInDown: HTMLMotionProps<'div'> = {
    initial: {
        opacity: 0,
        y: -100
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    transition: {
        duration: 0.5
    }
}