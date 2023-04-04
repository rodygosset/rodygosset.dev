
import styles from "@styles/components/form-elements/text-input.module.scss"
import { ChangeEvent } from "react";


interface Props {
    className?: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
    name?: string;
    defaultValue?: string;
    currentValue?: string;
    type?: string;
    isTextArea?: boolean;
    required?: boolean;
    isInErrorState?: boolean;
}

const TextInput = ({ 
        className,
        placeholder, 
        onChange, 
        name,
        defaultValue, 
        currentValue, 
        type,
        isTextArea,
        required,
        isInErrorState
    }: Props) => {

    const getClassNames = () => {
        let classNames = styles.textInput 
        classNames += (className ? ' ' + className : '')
        classNames += (isInErrorState ? ' ' + styles.error : '')
        return classNames
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault()
        onChange(event.target.value)
    }

    return (
        <>
        {
            isTextArea ?
            <textarea 
                className={getClassNames()}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                defaultValue={defaultValue}
                value={currentValue}
                required={required}
            />   
            :
            <input 
                className={getClassNames()}
                name={name ? name : undefined}
                type={type}
                placeholder={placeholder ? placeholder : undefined}
                onChange={handleChange}
                defaultValue={defaultValue ? defaultValue : undefined}
                value={currentValue}
                required={required}
            />
        }
        </>
        
    )
}

export default TextInput