import "./contact.css";

function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact-content">
                    <div className="align">
                        <div className="rectangle"></div>
                        <h1>CONTACT</h1>
                    </div>
                    <div className="msg">
                        <h1>Send me a message</h1>
                        <a href="mailto:keithprietolawrence@gmail.com" target="_parent">
                            keithprietolawrence@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;