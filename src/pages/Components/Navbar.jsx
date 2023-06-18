import React, {useState} from "react";
import "./Navbar.scss"
import {Link} from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/*<Link to="/">*/}
                    <span className="text">fiverr</span>
                    {/*</Link>*/}
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    <span>Became a seller</span>
                    <button>Join</button>
                </div>
            </div>
            <hr/>
            {active &&
                <>
                    <div className="menu">
                        <span>Test</span>
                        <span>Test1</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar
