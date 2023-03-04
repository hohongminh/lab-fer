import { useState } from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import "./Header.css"


function Header() {
    const [toggle, setToggle] = useState("light");
    return (
        <div className={toggle}>
            <div className="Header">
                <div></div>

                <div className="abc">

                    <Link to="/"><Icon>home</Icon>Home</Link>
                    <Link to="/Films"><Icon>dvr</Icon>Films</Link>
                    <Link to="/News"><Icon>dvr</Icon>News</Link>
                    <Link to="/Contact"><Icon>contacts</Icon>Contact</Link>
                    <Link to="/About"><Icon>info_outline</Icon>About</Link>

                </div>
                <div><button className="button1" onClick={() => setToggle(toggle === "dark" ? "light" : "dark")}>Change</button></div>
            </div>
        </div>
    )
}
export default Header
