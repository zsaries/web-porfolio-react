import "./footer.css";

function Footer() {
    const facebook = "https://www.facebook.com/lawrenxceprieto";
    const linkedin = "https://www.linkedin.com/in/lawrenxce/";
    const github = "https://github.com/lawrenceprieto";
    return (
        <>
            <div className="footer-content">
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <i className="fa-2x fa-brands fa-linkedin"></i>
                </a>
                <a href={facebook} target="_blank" rel="noreferrer">
                    <i className="fa-2x fa-brands fa-facebook"></i>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <i className="fa-2x fa-brands fa-github"></i>
                </a>
            </div>
        </>
    );
}

export default Footer;