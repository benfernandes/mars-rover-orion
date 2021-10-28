import React, {useState} from "react";
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";
import {DropdownItem} from "./DropdownItem";

export const DropdownMenu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("main");

    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                classNames="menu-primary"
                timeout={500}
            >
                <div className="menu">
                    <Link to="/">
                        <DropdownItem setActiveMenu={setActiveMenu}
                                      leftIcon={<img src={"/icons/homeicon.svg"} alt="Home"/>}>
                            Home
                        </DropdownItem>
                    </Link>
                    <Link to="/gallery">
                        <DropdownItem setActiveMenu={setActiveMenu}
                                      leftIcon={<img src={"/icons/galleryicon.svg"} alt="Gallery"/>}>
                            Gallery
                        </DropdownItem>
                    </Link>
                    <Link to="/roverDetails">
                        <DropdownItem setActiveMenu={setActiveMenu}
                                      leftIcon={<img src={"/icons/rovericon.svg"} alt="Rover Details"/>}>
                            Rover Details
                        </DropdownItem>
                    </Link>
                    <Link to="/RovGuessr">
                        <DropdownItem setActiveMenu={setActiveMenu}
                                      leftIcon={<img src={"/icons/thinkingicon.svg"} alt="Rover Game"/>}>
                            RovGuessr
                        </DropdownItem>
                    </Link>
                </div>
            </CSSTransition>
        </div>
    )
}