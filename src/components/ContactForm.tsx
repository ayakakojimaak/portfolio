import React from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className={styles.container}>
        <h2>Contact Me</h2>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button className={styles.btn} type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
