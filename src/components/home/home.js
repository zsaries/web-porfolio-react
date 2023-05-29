import "./home.css";

function Home() {

    function handleClick() {
        window.scroll(0, 0);
    }

    return (
        <>
            <div className="home" id="home">
                <div data-aos="zoom-in">
                    <h1 className="scale-in-center"> Hello Welcome to my porfolio</h1>
                </div>

                <p>"I am a self taught Front-End Web developer who absolutely loves all things coding!"</p>
            </div>
            <i className="fa-2x fa-sharp fa-solid fa-chevron-up arrow-up" onClick={handleClick}></i>

        </>
    );
}

export default Home;