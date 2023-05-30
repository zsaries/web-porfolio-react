import "./about.css";
import image from "../../images/3.jpg";
// skill
import html from "../../images/skill/html5.png";
import css from "../../images/skill/css3.png";
import javascript from "../../images/skill/javascript.png";
import react from "../../images/skill/react.png";
import bootstrap from "../../images/skill/bootstrap.png";
import php from "../../images/skill/php.png";
import mysql from "../../images/skill/mysql.png";
import laravel from "../../images/skill/laravel.png";
import github from "../../images/tool/github.png";
import git from "../../images/tool/git.png";

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
                                    Lawrence here, age 23. I don't talk a lot. When 2023 began,
                                    i started over in web development as a coder from scratch.
                                    I also attended a boothcamp to broaden my knowledge and learn
                                    about new technologies, in the hopes of obtaining work in this
                                    industry to expand my learnings, knowledge,and skills. And I
                                    really believe in saying "Mistakes can happen, but if it happens
                                    again it stops being a mistake and starts being a choice."
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
                                <div className="skills-container">
                                    <img src={html} alt="html" height="80px" width="80px" />
                                    <span>HTML</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="300" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={css} alt="css" height="80px" width="80px" />
                                    <span>CSS</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="400" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={javascript} alt="javascript" height="80px" width="80px" />
                                    <span>Javascript</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="500" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={php} alt="php" height="80px" width="80px" />
                                    <span>PHP</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="600" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={mysql} className="skills-container" alt="mysql" height="80px" width="80px" />
                                    <span>MySQL</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="700" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={bootstrap} className="skills-container" alt="bootstrap" height="80px" width="80px" />
                                    <span>Bootstrap</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="800" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={react} alt="react" height="80px" width="80px" />
                                    <span>React</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="900" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={laravel} alt="laravel" height="80px" width="80px" />
                                    <span>Laravel</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={github} alt="github" height="80px" width="80px" />
                                    <span>Github</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={git} alt="git" height="80px" width="80px" />
                                    <span>Git</span>
                                </div>
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
                            <p>Full-Stack Web Development</p>
                            <p>Febraury - May 2023</p>
                            <p>Certificate</p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default About;