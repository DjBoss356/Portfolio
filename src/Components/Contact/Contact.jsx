import style from "../Contact/Contact.module.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rmq256r', 'template_wdl92q5', form.current, {
        publicKey: '-ZX_fEmNk666JfetJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className={style.container} id="contact">
        <h1 className={style.section}>Contact</h1>
        <form ref={form} onSubmit={sendEmail} className={style.form}>
            <label className={style.label}>Nom</label> 
            <input className={style.name} id="nom" type="text" name="user_name" placeholder="Votre nom" required />
            <label className={style.label}>Email</label>
            <input className={style.mail} id="mail" type="email" name="user_email" placeholder="Votre adresse e-mail" required />
            <label className={style.label}>Message</label>
            <textarea className={style.message} id="message" name="message" placeholder="Votre message" required />
            <input className={style.button} type="submit" value="Send" />
    </form>
    </section>
    
  );
};