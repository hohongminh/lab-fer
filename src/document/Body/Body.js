import { Route, Router, Routers, Routes } from "react-router-dom";
import Home from "../Layout/Home/Home";
import Films from "../Layout/Films/Films";
import News from "../Layout/News/News";
import Contact from "../Layout/Contact/Contact";
import About from "../Layout/About/About"


export default function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Films" element={<Films />} />
                <Route path="/News" element={<News />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    )
}