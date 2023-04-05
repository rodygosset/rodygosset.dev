
import styles from "@styles/components/form-elements/field-container.module.scss"

interface Props {
    children: any;
    isInErrorState?: boolean;
}

const FieldContainer = (
    {
        children,
        isInErrorState
    }: Props
) => {

    const getClassNames = () => {
        let classNames = styles.fieldContainer
        classNames += isInErrorState ? ' ' + styles.error : ''
        return classNames
    }

    // render

    return (
        <div className={getClassNames()}>
            { children }
        </div>
    )
}

export default FieldContainer

