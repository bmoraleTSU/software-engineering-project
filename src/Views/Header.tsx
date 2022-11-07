import "../App.css";
import {useState} from 'react';


function onClickHandler(){
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
    });
}

function Header() {
    // Will be used to change icons of Access Logs button on mouse hover
    const [isHoveringAccessLogs, setIsHoveringAccessLogs] = useState(false);

    const handleMouseOverAccessLogs = () => {
        setIsHoveringAccessLogs(true);
    };

    const handleMouseOutAccessLogs = () => {
        setIsHoveringAccessLogs(false);
    };

    // Will be used to change icons of Add Client button on mouse hover
    const [isHoveringAddClient, setIsHoveringAddClient] = useState(false);

    const handleMouseOverAddClient = () => {
        setIsHoveringAddClient(true);
    };

    const handleMouseOutAddClient = () => {
        setIsHoveringAddClient(false);
    };
    return (
        <section className="section">
            <nav className="navbar has-shadow is-fixed-top test-app-header" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    {/* <a href="/" className="navbar-item">
                    <img
                        src={require("../anime.png")}
                        alt="Logo"
                        width="auto"
                        height="auto"
                    />
                    </a> */}
                    <div className="navbar-item">
                        <h1 className="title is-3 is-family-secondary has-text-weight-bold is-italic">Client List</h1>
                    </div>
                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={onClickHandler}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <input className="input" type="search" placeholder="Search" size={50}></input>
                        </div>    
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="icon-text button is-success is-light" href="/AccessLogs" onMouseOver={handleMouseOverAccessLogs} onMouseOut={handleMouseOutAccessLogs}>
                                        <span className="icon">
                                            <i className={isHoveringAccessLogs ? 'fas fa-sharp fa-spin fa-regular fa-gears' : 'fas fa-sharp fa-regular fa-gears'}></i>
                                        </span>
                                        <span>
                                            Access Logs
                                        </span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-success is-light" href="/" onMouseOver={handleMouseOverAddClient} onMouseOut={handleMouseOutAddClient}>
                                        <span className="icon">
                                            <i className={isHoveringAddClient ? 'fas fa-solid fa-user-plus fa-bounce' : 'fas fa-solid fa-user-plus'}></i>
                                        </span>
                                        <span>
                                            Add Client
                                        </span>
                                    </a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Header;