import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs-com
import Link from "next/link";
import cn from "classnames";
import styles from "./Form.module.sass";
import Field from "@/components/Field";
import Select from "@/components/Select";

type FormProps = {};

const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [company, setCompany] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [redirecting, setRedirecting] = useState(false);

    const redirectToThanks = () => {
      // Set redirecting to true to trigger the delay
      setRedirecting(true);
  
      // After a delay (e.g., 3000 milliseconds or 3 seconds), redirect to "/thanks"
      setTimeout(() => {
        window.location.href = '/thanks';
      }, 1000); // Adjust the delay time as needed (in milliseconds)
    };

    const redirectTo404 = () => {
        // Set redirecting to true to trigger the delay
        setRedirecting(true);
    
        // After a delay (e.g., 3000 milliseconds or 3 seconds), redirect to "/thanks"
        setTimeout(() => {
          window.location.href = '/404';
        }, 1000); // Adjust the delay time as needed (in milliseconds)
      };
  
    const form = useRef(); // Use useRef to get a reference to the form element

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lwri32l', 'template_74fhrkw', form.current, 'EX_A9-j_JtnnH7oPd') // Replace with your actual service ID, template ID, and user ID
            .then((result) => {
                console.log(result.text);
                redirectToThanks();
            }, (error) => {
                console.log(error.text);
                redirectTo404();
            });
    };

    return (
        <form
            className={styles.form}
            action="/thanks" 
            method="post"
            ref={form}
            onSubmit={sendEmail}
        >


            <Field
                className={styles.field}
                number="01"
                name="name"
                label="What's your name?"
                placeholder="Type your full name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="02"
                name="email"
                label="What's your professional email address?"
                placeholder="example@email.com"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="03"
                name="phone"
                label="What's your phone number?"
                placeholder="+11 2222 333344"
                type="tel"
                value={phone}
                onChange={(e: any) => setPhone(e.target.value)}
                required
            />
            <Field
                className={styles.field}
                number="04"
                name="company"
                label="What's your company/organization name?"
                placeholder="Type your company/organiztion name"
                value={company}
                onChange={(e: any) => setCompany(e.target.value)}
                required
            />
           
            <Field
                className={styles.field}
                number="07"
                name="description"
                label="Tell us about yout project"
                placeholder="Please type your project description"
                value={description}
                textarea={true} 
                onChange={(e: any) => setDescription(e.target.value)}
                required
            />
            <button className={cn("button-light", styles.button)} type="submit">
                SEND MESSAGE
            </button>

            {/* <Link className={cn("button-light", styles.button)} href="/thanks" type="submit">
                SEND MESSAGE
            </Link> */}
        </form>
    );
};

export default Form;
