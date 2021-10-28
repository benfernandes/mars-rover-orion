import React, {ReactChildren, ReactElement, ReactNode, useState} from "react";
import {CSSTransition} from "react-transition-group";
import { Link } from "react-router-dom";

const NavBarFunction : React.FC = () => {
    return (
        <Navbar>
            <NavItem icon={<img src={"/icons/menuicon.svg"} alt="Home"/>}>
                <DropdownMenu>

                </DropdownMenu>
            </NavItem>
        </Navbar>
    );
}



const DropdownMenu : React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("main");

    return(
        <div className="dropdown" >
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                classNames="menu-primary"
                timeout={500}
            >
                <div className="menu">
                    <DropdownItem
                        setActiveMenu={setActiveMenu}
                        leftIcon={<img src={"/icons/homeicon.svg"} alt="Home"/>}
                        goToMenu="settings"
                    >
                        Home </DropdownItem>
                    <Link to="/gallery"><DropdownItem setActiveMenu={setActiveMenu} leftIcon={<img src={"/icons/galleryicon.svg"} alt="Gallery"/>}>Gallery</DropdownItem></Link>
                    <Link to="/roverDetails"><DropdownItem setActiveMenu={setActiveMenu} leftIcon={<img src={"/icons/rovericon.svg"} alt="Rover Details"/>}>Rover Details</DropdownItem></Link>
                    <Link to="/RovGuessr"><DropdownItem setActiveMenu={setActiveMenu} leftIcon={<img src={"/icons/thinkingicon.svg"} alt="Rover Game"/>}>RovGuessr</DropdownItem></Link>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                classNames="menu=secondary"
            >
                <div className="menu">
                    <DropdownItem setActiveMenu={setActiveMenu} >Settings</DropdownItem>
                </div>
            </CSSTransition>
        </div>

    )
}

interface DropDownItemProps{
    children? : React.ReactNode;
    goToMenu? : string ;
    leftIcon? : ReactElement;
    rightIcon? : ReactElement;
    setActiveMenu: Function;
}


const DropdownItem: React.FC <DropDownItemProps> = (props: DropDownItemProps) => {
    return(
        <a href="/#" className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}



const Navbar: React.FC  =(props) => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

interface NavItemProps{
    children: ReactNode;
    icon: ReactElement;
}


const NavItem : React.FC<NavItemProps> = (props : NavItemProps) => {
    const [open, setOpen] = useState(false);

    return(
        <li className="nav-item">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </button>
            {open && props.children}
        </li>
    )
}
export default NavBarFunction;