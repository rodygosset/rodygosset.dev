import { faCheck, faClipboard, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/components/email-box.module.scss"
import { useEffect, useState } from "react"

interface Props {
    address: string;
    CTAText: string;
    CTASuccessText: string;
}

const EmailBox = (
    {
        address,
        CTAText,
        CTASuccessText
    }: Props
) => {

    // state

    const [copied, setCopied] = useState(false)

    // reset after 2 seconds

    useEffect(() => {
        if(!copied) return
        setTimeout(() => setCopied(false), 2000)
    }, [copied])

    // handlers

    const handleClick = () => {
        navigator.clipboard.writeText(address)
        setCopied(true)
    }

    // render

    return (
        <button onClick={handleClick} className={styles.box}>
            <FontAwesomeIcon icon={faInbox}/>
            <span>{ address }</span>
            {
                copied ?
                <p className={styles.hoverMessage}>
                    {CTASuccessText} <FontAwesomeIcon icon={faCheck}/>
                </p>
                :
                <p className={styles.hoverMessage}>
                    {CTAText} <FontAwesomeIcon icon={faClipboard}/>
                </p>
            }
        </button>
    )
}

export default EmailBox