import { useState, useEffect } from "react";
import "./home.css";
import TypeWriterEffect from "react-typewriter-effect";


function Home() {

    function handleClick() {
        window.scroll(0, 0);
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setScroll(true);
        }, 12000);
    }, [setScroll]);


    return (
        <>
            <div className="home" id="home">
                <div data-aos="zoom-in">
                    <h1 className="scale-in-center">Welcome to my Porfolio</h1>
                </div>

                <TypeWriterEffect
                    textStyle={{
                        fontFamily: "Red Hat Display",
                        fontSize: "1.3em",
                        color: "grey",
                        margin: "0 auto",
                        width: "60%",
                        textAlign: "center"
                    }}
                    startDelay={2300}
                    cursorColor="white"
                    hideCursorAfterText="true"
                    text="I'm a full-stack web developer who is passionate about all things in coding and has experience creating websites using amazing frameworks and libraries such as React, and Laravel."
                    typeSpeed={40}
                />
                <div class="container">
                    {scroll ?
                        <div class="container-mouse" style={{ opacity: scroll ? 1 : 0 }}>
                            <span class="mouse-btn" >
                                <span class="mouse-scroll"></span>
                            </span>
                        </div> : null}
                </div>

            </div>
            <i className="fa-2x fa-sharp fa-solid fa-chevron-up arrow-up" onClick={handleClick}></i>

        </>
    );
}

export default Home;