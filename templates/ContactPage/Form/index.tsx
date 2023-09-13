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
    const [service, setService] = useState<string>("");
    const [budget, setBudget] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const optionsService = [
        {
            title: "Marketing and Communication Plan",
            value: "marketing-and-communication-plan",
        },
        {
            title: "Branding",
            value: "branding",
        },
        {
            title: "Digital Campaigns",
            value: "digital-campaigns",
        },
        {
            title: "Programmatic Advertising",
            value: "programmatic-advertising",
        },
        {
            title: "Marketing as a Service",
            value: "marketing-as-a-service",
        },
        {
            title: "Website",
            value: "website",
        },
        {
            title: "Innovation Spirit",
            value: "innovation-spirit",
        },
        {
            title: "Public Realations",
            value: "public-realations",
        },
    ];

    const optionsBudget = [
        {
            title: "<$50k",
            value: "<$50k",
        },
        {
            title: "$50k-100k",
            value: "$50k-100k",
        },
        {
            title: "$100k-200k",
            value: "$100k-200k",
        },
        {
            title: "$200k+",
            value: "$200k+",
        },
    ];

    const handleChangeService = (value: string) => setService(value);
    const handleChangeBudget = (value: string) => setBudget(value);

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
