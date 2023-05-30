import "./header.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import picture from "../../images/picture.jfif";
import { useState } from "react";

function Header() {

    const [offcanvasShow, setOffCanvasShow] = useState(false);

    function handleOffcanvas() {
        setOffCanvasShow(true);
    }

    function closeOffcanvas() {
        setOffCanvasShow(false);
    }


    return (
        <>
            <div className="navigation">
                <a href="#home"><img src={picture} alt="mypicture" className="mypicture" /></a>
                <div className="desktop-navigation">
                    <li><a href="#home" className="box">Home</a></li>
                    <li><a href="#about" className="box">About</a></li>
                    <li><a href="#project" className="box">Project</a></li>
                    <li><a href="#contact" className="box">Contact</a></li>
                    <li><a href="https://drive.google.com/file/d/1pQFEKpI6X_c_wPCVp5g5v00LbAbdokfQ/view?usp=sharing" rel="noreferrer" target="_blank" className="box">Resume</a></li>

                </div>

                <div className="mobile-navigation">
                    <label class="container">
                        <input type="checkbox" onClick={handleOffcanvas} />
                        <div class="checkmark">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                </div>
            </div>

            <Offcanvas show={offcanvasShow} onHide={closeOffcanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <li><a href="#home" className="box">Home</a></li>
                    <li><a href="#about" className="box">About</a></li>
                    <li><a href="#project" className="box">Project</a></li>
                    <li><a href="#contact" className="box">Contact</a></li>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Header;