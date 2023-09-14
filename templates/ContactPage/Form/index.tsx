import { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";
import Select from "@/components/Select";

type FormProps = {};

const Form = ({}: FormProps) => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    return (
        <form
            className={styles.form}
            action=""
            onSubmit={() => console.log("Submit")}
        >
            <Field
                className={styles.field}
                number="01"
                label="What’s your name?"
                placeholder="Type your full name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="02"
                label="What’s your professional email address?"
                placeholder="example@email.com"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="03"
                label="What’s your phone number?"
                placeholder="+11 2222 333344"
                type="tel"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="04"
                label="What’s your company/organization name?"
                placeholder="Type your company/organiztion name"
                value={company}
                onChange={(e: any) => setCompany(e.target.value)}
                required
            />
           
            <Field
                className={styles.field}
                number="07"
                label="Tell us about yout project"
                placeholder="Please type your project description"
                value={description}
                textarea={true} 
                onChange={(e: any) => setDescription(e.target.value)}
                required
            />
            {/* <button className={cn("button-light", styles.button)} type="submit">
                SEND MESSAGE
            </button> */}
            <Link className={cn("button-light", styles.button)} href="/thanks">
                SEND MESSAGE
            </Link>
        </form>
    );
};

export default Form;
