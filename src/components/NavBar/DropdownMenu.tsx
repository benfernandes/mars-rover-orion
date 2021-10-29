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
                timeout={1}
            >
                <div className="dropdown-menu">
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
                    <Link to="/">
                        <DropdownItem setActiveMenu={setActiveMenu}
                                      leftIcon={<img src={"/icons/rovericon.svg"} alt="Rover Details"/>}
                                      rightIcon={<img className="right-chevron-menu" src={"/icons/chevronrightmenu.svg"} alt="Rover Details"/>}
                                      goToMenu="rovers">
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
            <CSSTransition
                in={activeMenu === "rovers"}
                unmountOnExit
                classNames="rover-menu"
                timeout={1}
            >
                <div className="dropdown-menu">
                    <Link to="/Rovers/Curiosity">
                        <DropdownItem setActiveMenu={setActiveMenu}>
                            Curiosity
                        </DropdownItem>
                    </Link>
                    <Link to="/Rovers/Opportunity">
                        <DropdownItem setActiveMenu={setActiveMenu}>
                            Opportunity
                        </DropdownItem>
                    </Link>
                    <Link to="/Rovers/Spirit">
                        <DropdownItem setActiveMenu={setActiveMenu}>
                            Spirit
                        </DropdownItem>
                    </Link>
                    <Link to="/Rovers/Ben">
                        <DropdownItem setActiveMenu={setActiveMenu}>
                            BENJAMIN FERNANDES
                        </DropdownItem>
                    </Link>
                </div>
            </CSSTransition>

        </div>
    )
}