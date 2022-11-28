import "../App.css";
import { useState } from "react";


function ClientInventories() {
  // Handles burger click
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

  // Will be used to change icons of Return Home button on mouse hover
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
      setIsHovering(true);
  };

  const handleMouseOut = () => {
      setIsHovering(false);
  };

  return (
    <>
      <div className="hero-head">
            <section className="section">
                <nav className="navbar has-shadow is-fixed-top test-app-header" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                        <img
                            src={require("../pageTitles/inventories_list_title.png")}
                            alt="Logo"
                            width="auto"
                            height="auto"
                        />
                        </div>
                        <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={onClickHandler}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="button is-success is-light" href="/" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                            <span className="icon">
                                                <i className={isHovering ? 'fas fa-duotone fa-warehouse fa-bounce' : 'fas fa-duotone fa-warehouse'}></i>
                                            </span>
                                            <span>
                                                Add Inventory
                                            </span>
                                        </a>
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
      </div>
      <div className="hero-body">
        <h2>This is where the inventories for specific clients would go!</h2>
      </div>
    </>
  );
}

export default ClientInventories;