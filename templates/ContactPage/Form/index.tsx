import React, { useState, useRef, FormEvent } from 'react'; // Import FormEvent type
import emailjs from 'emailjs-com';
import Link from 'next/link';
import cn from 'classnames';
import styles from './Form.module.sass';
import Field from '@/components/Field';
import Select from '@/components/Select';

type FormProps = {};

const Form = () => {
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const [phone, setPhone] = useState<string>('');
const [company, setCompany] = useState<string>('');
const [description, setDescription] = useState<string>('');
const [redirecting, setRedirecting] = useState<boolean>(false); // Specify boolean type

const redirectToThanks = () => {
    setRedirecting(true);
    window.location.href = '/thanks';
};

const redirectTo404 = () => {
    setRedirecting(true);
    window.location.href = '/404';
};

const form = useRef<HTMLFormElement>(null); // Specify the type of useRef

const sendEmail = (e: FormEvent) => {
    e.preventDefault();
  
    if (form.current) {
      emailjs
        .sendForm('service_lwri32l', 'template_74fhrkw', form.current, 'EX_A9-j_JtnnH7oPd')
        .then(
          (result) => {
            console.log(result.text);
            redirectToThanks();
          },
          (error) => {
            console.log(error.text);
            redirectTo404();
          }
        );
    }
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
