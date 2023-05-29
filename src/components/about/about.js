import "./about.css";
import image from "../../images/3.jpg";
// skill
import html from "../../images/skill/html5.png";
import css from "../../images/skill/css3.png";
import javascript from "../../images/skill/javascript.png";
import react from "../../images/skill/react.png";
import bootstrap from "../../images/skill/bootstrap.png";
// tool
import github from "../../images/tool/github.png";
import git from "../../images/tool/git.png";
import visualstudio from "../../images/tool/visual-studio-code.png";

function About() {
    return (
        <>
            <div id="about" className="about-me">
                <div className="about-body">
                    <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                        <div className="align">
                            <div className="rectangle"></div>
                            <h1>ABOUT</h1>
                        </div>
                    </div>
                    <div className="about-content">
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1000">
                            <img src={image} className="avatar" alt="mypicture" />
                        </div>
                        <div className="">
                            <div data-aos="zoom-in"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="500">
                                <p className="description">
                                    Lawrence here, age 23. I don't talk a lot.
                                    I like playing video games and listening to music.
                                    When the year 2023 began, I made the decision to
                                    restart my studies in web development as a coder
                                    from scratch in the hopes of finding employment
                                    in this field even if I haven't graduated. And I
                                    really believe in saying "Mistakes can happen, but
                                    if it happens again it stops being a mistake and
                                    starts being a choice."
                                </p>
                            </div>
                            <div data-aos="zoom-in" data-aos-offset="350"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000">
                                <h1>Hobbies and Interest</h1>
                            </div>
                            <div className="hobbies-interest">
                                <div data-aos="zoom-in" data-aos-delay="200" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container">
                                        <i className="fa-2x fa-solid fa-gamepad"></i>
                                        Games
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="300" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container" id="movie">
                                        <i className="fa-2x fa-solid fa-clapperboard"></i>
                                        Movies
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="400" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container" id="music">
                                        <i className="fa-2x fa-solid fa-headphones"></i>
                                        Music
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="500" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container">
                                        <i className="fa-2x fa-solid fa-mug-saucer"></i>
                                        Coffee
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="600" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container">
                                        <i className="fa-2x fa-solid fa-car"></i>
                                        Car
                                    </div>
                                </div>
                                <div data-aos="zoom-in" data-aos-delay="700" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                    <div className="h-i-container">
                                        <i className="fa-2x fa-solid fa-credit-card"></i>
                                        Money
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                            <div className="align">
                                <div className="rectangle"></div>
                                <h1>SKILLS</h1>
                            </div>
                        </div>
                        <div className="skills">
                            <div data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-sine">
                                <img src={html} className="skills-container" alt="html" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="300" data-aos-easing="ease-in-sine">
                                <img src={css} className="skills-container" alt="css" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease-in-sine">
                                <img src={javascript} className="skills-container" alt="javascript" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-sine">
                                <img src={react} className="skills-container" alt="react" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="600" data-aos-easing="ease-in-sine">
                                <img src={bootstrap} className="skills-container" alt="bootstrap" height="80px" width="80px" />
                            </div>
                        </div>

                    </div>

                    <div className="content">
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">

                            <div className="align">
                                <div className="rectangle"></div>
                                <h1>TOOL USED</h1>
                            </div>
                        </div>
                        <div className="skills">
                            <div data-aos="zoom-in" data-aos-delay="200" data-aos-easing="ease-in-sine">
                                <img src={github} className="skills-container" alt="github" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="300" data-aos-easing="ease-in-sine">
                                <img src={git} className="skills-container" alt="git" height="80px" width="80px" />
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease-in-sine">
                                <img src={visualstudio} className="skills-container" alt="visualstudio" height="80px" width="80px" />
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                            <div className="align">
                                <div className="rectangle"></div>
                                <h1>EXPERIENCE</h1>
                            </div>
                        </div>

                        <div className="experience">
                            <h2>KodeGo Boothcamp</h2>
                            <p>Web Development</p>
                            <p>Febraury - May 2023</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default About;