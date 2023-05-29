import "./contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

function Contact() {

    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wqh7b2c', 'template_cglj5co', form.current, 'QpEDjlv3HEhIAZcVx')
            .then((result) => {
                setSent(true);
                form.current.reset();
            }, (error) => {
                setSent(false);
            });
    };

    let success;
    if (sent) {
        success = (<div className="message-response">Message successfully sent</div>);
        setTimeout(() => {
            setSent(false);
        }, 5000);
    }

    return (
        <>
            <div className="contact" id="contact">
                <div className="contact-form">
                    <div className="align">
                        <div className="rectangle"></div>
                        <h1>CONTACT</h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="input-container">
                            <input type="text" name="name" required />
                            <label for="input" class="label">Name</label>
                            <div class="underline"></div>
                        </div>

                        <div class="input-container">
                            <input type="email" name="email" required />
                            <label for="input" class="label">Email</label>
                            <div class="underline"></div>
                        </div>

                        <div class="input-container">
                            <textarea name="message" rows="4" cols="50" required />
                            <label for="input" class="label">Message</label>
                            <div class="underline-t"></div>
                        </div>

                        {success}

                        <input type="submit" value="Send" />
                    </form>

                </div>

            </div>
        </>
    );
}

export default Contact;