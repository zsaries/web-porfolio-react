import Card from "./card";
import "./project.css";
import miniproject1 from "./project-image/mini-project1.gif";
import miniproject2 from "./project-image/mini-project2.gif";
import capstone from "./project-image/capstone.gif";
import Modal from "react-bootstrap/Modal";
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from "react-bootstrap/Button";
import { useState } from "react";

function Project() {

    const projects = [
        {
            "title": "Web-Porfolio",
            "description": "This is our mini-project, i created a multi web page porfolio using html css and javascript",
            "thumbnail": miniproject1,
            "github": "https://github.com/zsaries/web-porfolio?search=1",
            "demo": "https://e-porfolio.netlify.app"
        },
        {
            "title": "Jennie's Pizza",
            "description": "This project is created using html, css and javascript",
            "thumbnail": miniproject2,
            "github": "https://github.com/Ierie/jenniespizza?search=1",
            "demo": "https://ierie.github.io/jenniespizza/#home"
        },
        {
            "title": "CourseCraft",
            "description": "This project is created using react js for the frontend and laravel for the backend",
            "thumbnail": capstone
        },
        {
            "title": "Web-porfolio (React)",
            "description": "I created again my web porfolio using React",
            "thumbnail": "",

        }

    ];

    const [modalShow, setModalShow] = useState(false);
    const [offcanvasShow, setOffCanvasShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    function handleModal(project) {
        setSelectedProject(project);
        setModalShow(true);
    }

    function closeModal() {
        setSelectedProject(null);
        setModalShow(false);
    }

    function handleOffcanvas(project) {
        setSelectedProject(project);
        setOffCanvasShow(true);
    }

    function closeOffcanvas() {
        setSelectedProject(null);
        setOffCanvasShow(false);
    }

    return (
        <>
            <div id="project" className="project">
                <div className="project-content">
                    <div className="align">
                        <div className="rectangle"></div>
                        <h1>PROJECT</h1>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-4">
                        {
                            projects.map((project, index) => (
                                <Card
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    thumbnail={project.thumbnail}
                                    modal={() => handleModal(project)}
                                    offcanvas={() => handleOffcanvas(project)}
                                />
                            ))
                        }
                    </div>

                    <Modal show={modalShow} onHide={closeModal}
                        size="lg"
                        backdrop="static"
                        keyboard={false}
                        dialogClassName="modal"
                        centered>
                        <Modal.Header closeButton dialogClassName="modal-header">
                            <Modal.Title>{selectedProject && selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body dialogClassName="modal-body">
                            <img src={selectedProject && selectedProject.thumbnail} alt={selectedProject && selectedProject.title} />
                            {selectedProject && selectedProject.description}
                        </Modal.Body>
                        <Modal.Footer dialogClassName="modal-footer">
                            <a href={selectedProject && selectedProject.github} rel="noreferrer" target="_blank">
                                Github
                            </a>
                            <a href={selectedProject && selectedProject.demo} rel="noreferrer" target="_blank">
                                Demo
                            </a>
                        </Modal.Footer>
                    </Modal>

                    <Offcanvas show={offcanvasShow} onHide={closeOffcanvas}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>{selectedProject && selectedProject.title}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div >
        </>
    );
}

export default Project;