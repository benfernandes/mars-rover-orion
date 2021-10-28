import React from "react";
import {DropdownMenu} from "./DropdownMenu";
import {Subnav} from "./Subnav";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="subnavs">
                <Subnav icon={<img src={"/icons/menuicon.svg"} alt="Home"/>}>
                    <DropdownMenu/>
                </Subnav>
            </ul>
        </nav>
    );
}

export default NavBar;

