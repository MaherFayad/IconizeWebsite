import cn from "classnames";
import styles from "./Field.module.sass";

type FieldProps = {
    name?: string;
    className?: string;
    label?: string;
    number?: string;
    textarea?: boolean;
    type?: string;
    value: string;
    onChange: any;
    placeholder?: string;
    required?: boolean;
};

const Field = ({
    name,
    className,
    label,
    number,
    textarea,
    type,
    value,
    onChange,
    placeholder,
    required,
}: FieldProps) => (
    <div
        className={cn(
            styles.field,
            {
                [styles.fieldTextarea]: textarea,
                [styles.fieldNumber]: number,
            },
            className
        )}
    >
        {number && <div className={cn("label", styles.number)}>{number}</div>}
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.wrap}>
            {textarea ? (
                <textarea
                    className={styles.textarea}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                ></textarea>
            ) : (
                <input
                    className={styles.input}
                    name={name}
                    type={type || "text"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    </div>
);

export default Field;
