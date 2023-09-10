import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "classnames";
import styles from "./Select.module.sass";
import Icon from "@/components/Icon";

type OptionType = {
    title: string;
    value: string;
};

type SelectProps = {
    className?: string;
    label?: string;
    number?: string;
    title?: string;
    value: string;
    onChange: (value: string) => void;
    options: OptionType[];
};

const Select = ({
    className,
    label,
    number,
    title,
    value,
    onChange,
    options,
}: SelectProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    const activeOption = options.filter((option) => option.value === value);

    const handleChange = (value: string) => {
        onChange(value);
        setVisible(false);
    };
    return (
        <div
            className={cn(
                styles.field,
                { [styles.fieldNumber]: number, [styles.active]: visible },
                className
            )}
        >
            {number && (
                <div className={cn("label", styles.number)}>{number}</div>
            )}
            {label && <div className={styles.label}>{label}</div>}
            <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
                <div className={styles.select}>
                    <button
                        className={cn(styles.toggle, {
                            [styles.active]: visible,
                        })}
                        onClick={() => setVisible(!visible)}
                        type="button"
                    >
                        {activeOption.length > 0 ? (
                            activeOption[0].title
                        ) : (
                            <div className={styles.title}>{title}</div>
                        )}
                        <Icon name="chevron-down" />
                    </button>
                    {visible && (
                        <div className={styles.dropdown}>
                            {[
                                options.map((option, index) => (
                                    <button
                                        className={cn(styles.option, {
                                            [styles.active]:
                                                value === option.value,
                                        })}
                                        onClick={() =>
                                            handleChange(option.value)
                                        }
                                        type="button"
                                        key={index}
                                    >
                                        {option.title}
                                    </button>
                                )),
                            ]}
                        </div>
                    )}
                </div>
            </OutsideClickHandler>
        </div>
    );
};

export default Select;
