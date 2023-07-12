import "./about.css";
import image from "../../images/3.jpg";
import html from "../../images/skill/html5.png";
import css from "../../images/skill/css3.png";
import javascript from "../../images/skill/javascript.png";
import react from "../../images/skill/react.png";
import php from "../../images/skill/php.png";
import mysql from "../../images/skill/mysql.png";
import laravel from "../../images/skill/laravel.png";
// import bootstrap from "../../images/skill/bootstrap.png";
// import github from "../../images/tool/github.png";
// import git from "../../images/tool/git.png";
// import { Link } from "react-router-dom";

function About() {

    const certificate = "https://assets.kodego.ph/public/isa/s1SDXSyjMhfjzHrlRCyROxtMJA23XaVr68ntJXpc.pdf";

    return (
        <>
            <div id="about" className="about-me">
                <div className="about-body">
                    <div className="align">
                        <div className="rectangle"></div>
                        <h1>ABOUT</h1>
                    </div>
                    <div className="about-content">
                        <img src={image} className="avatar" alt="mypicture" />
                        <div className="">
                            <p className="description">
                                Lawrence here, age 23. I don't talk a lot. When 2023 began,
                                i started over in web development as a coder from scratch.
                                I also attended a boothcamp to broaden my knowledge and learn
                                about new technologies, in the hopes of obtaining work in this
                                industry to expand my learnings, knowledge,and skills.
                            </p>
                            <h1>Hobbies and Interest</h1>
                            <div className="hobbies-interest">
                                <div className="h-i-container">
                                    <i className="fa-2x fa-solid fa-gamepad"></i>
                                    Games
                                </div>
                                <div className="h-i-container" id="movie">
                                    <i className="fa-2x fa-solid fa-clapperboard"></i>
                                    Movies
                                </div>
                                <div className="h-i-container" id="music">
                                    <i className="fa-2x fa-solid fa-headphones"></i>
                                    Music
                                </div>
                                <div className="h-i-container">
                                    <i class="fa-2x fa-sharp fa-solid fa-laptop-file"></i>
                                    Learnings
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="align">
                            <div className="rectangle"></div>
                            <h1>SKILLS</h1>
                        </div>
                        <div className="skills">
                            <div className="skills-container">
                                <img src={html} alt="html" height="80px" width="80px" />
                                <span>HTML</span>
                                <span>(Beginner)</span>
                            </div>
                            <div className="skills-container">
                                <img src={css} alt="css" height="80px" width="80px" />
                                <span>CSS</span>
                                <span>(Beginner)</span>
                            </div>
                            <div className="skills-container">
                                <img src={javascript} alt="javascript" height="80px" width="80px" />
                                <span>Javascript</span>
                                <span>(Beginner)</span>
                            </div>
                            <div className="skills-container">
                                <img src={php} alt="php" height="80px" width="80px" />
                                <span>PHP</span>
                                <span>(Beginner)</span>
                            </div>
                            <div className="skills-container">
                                <img src={mysql} className="skills-container" alt="mysql" height="80px" width="80px" />
                                <span>MySQL</span>
                                <span>(Beginner)</span>
                            </div>
                            {/* <div data-aos="zoom-in" data-aos-delay="700" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={bootstrap} className="skills-container" alt="bootstrap" height="80px" width="80px" />
                                    <span>Bootstrap</span>
                                    <span>(Beginner)</span>
                                </div>
                            </div> */}
                            <div className="skills-container">
                                <img src={react} alt="react" height="80px" width="80px" />
                                <span>React</span>
                                <span>(Beginner)</span>
                            </div>
                            <div className="skills-container">
                                <img src={laravel} alt="laravel" height="80px" width="80px" />
                                <span>Laravel</span>
                                <span>(Beginner)</span>
                            </div>
                            {/* <div data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={github} alt="github" height="80px" width="80px" />
                                    <span>Github</span>
                                    <span>(Beginner)</span>
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-delay="1000" data-aos-easing="ease-in-sine">
                                <div className="skills-container">
                                    <img src={git} alt="git" height="80px" width="80px" />
                                    <span>Git</span>
                                    <span>(Beginner)</span>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="content">
                        <div className="align">
                            <div className="rectangle"></div>
                            <h1>EXPERIENCE</h1>
                        </div>
                        <div className="experience">
                            <h3>KodeGo Boothcamp</h3>
                            <p>Full-Stack Web Development (Feb - June 2023)</p>
                            <a href={certificate} target="_blank" rel="noreferrer">Certificate</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;