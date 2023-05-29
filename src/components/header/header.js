import "./header.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
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
                <h1 href="#home">KLBP</h1>
                <div className="desktop-navigation">
                    <li><a href="#home" className="box">Home</a></li>
                    <li><a href="#about" className="box">About</a></li>
                    <li><a href="#project" className="box">Project</a></li>
                    <li><a href="#contact" className="box">Contact</a></li>
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