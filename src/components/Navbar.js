import react, { useState } from "react";
import Logo from "../images/logo2.jpg";
import {Link} from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css";



function Navbar() {
    const [openLinks,setOpenLinks] = useState(false);

   const toggleNavbar = () => {
    setOpenLinks(!openLinks);
};
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"} >
                <img src={Logo}/>
                <div className="hiddenLinks">
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/service">Services</Link>
                <Link to ="/Contact">Contact </Link>

                </div>
            </div>
            <div className="rightSide">
            <Link to ="/">Home</Link>
                <Link to ="/About">About Us</Link>
                <Link to ="/service">Services</Link>
                <Link to ="/Contact">Contact </Link>
                <button onClick = {toggleNavbar}>
                    <ReorderIcon/>
                </button>
             </div>
             
            

        </div>
    )
}

export default Navbar
