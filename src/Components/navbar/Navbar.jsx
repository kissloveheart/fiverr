import React, {useEffect, useState} from "react";
import "./Navbar.scss"
// import {Link} from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  const currentUser = {
    id: 1,
    username: "Join Dalid",
    isSeller: true,
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, []);
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
          {!currentUser?.isSeller && <span>Became a seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="./public/images/React.png" alt=""/>
              <span>{currentUser.username}</span>
              {open &&
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              }
            </div>
          )}
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
