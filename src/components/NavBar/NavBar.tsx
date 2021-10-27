import React, {ReactChildren, ReactElement, ReactNode, useState} from "react";
import {CSSTransition} from "react-transition-group";
import { ReactComponent as MenuIcon } from "./icons/menuicon.svg"
import { ReactComponent as GalleryIcon } from "./icons/galleryicon.svg"
import { ReactComponent as RoverIcon } from "./icons/rovericon.svg"
import { ReactComponent as GuessIcon } from "./icons/thinkingicon.svg"
import { ReactComponent as HomeIcon } from "./icons/homeicon.svg"
import { Link } from "react-router-dom";

const NavBarFunction : React.FC = () => {
    return (
        <Navbar>
            <NavItem icon={<MenuIcon/>}>
                <DropdownMenu>

                </DropdownMenu>
            </NavItem>
        </Navbar>
    );
}


const DropdownMenu : React.FC = () => {

    const [activeMenu, setActiveMenu] = useState("main");


    interface DropDownItemProps{
        children? : React.ReactNode;
        goToMenu? : string ;
        leftIcon? : ReactElement;
        rightIcon? : ReactElement;
    }


    const DropdownItem: React.FC <DropDownItemProps> = (props: DropDownItemProps) => {
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

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
                        leftIcon={<HomeIcon/>}
                        goToMenu="settings"
                    >
                        Home </DropdownItem>
                    <Link to={"/gallery"}><DropdownItem leftIcon={<GalleryIcon/>}>Gallery</DropdownItem></Link>
                    <Link to={"/roverDetails"}><DropdownItem leftIcon={<RoverIcon/>}>Rover Details</DropdownItem></Link>
                    <Link to={"/RovGuessr"}><DropdownItem leftIcon={<GuessIcon/>}>RovGuessr</DropdownItem></Link>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                classNames="menu=secondary"
            >
                <div className="menu">
                    <DropdownItem>Settings</DropdownItem>

                </div>
            </CSSTransition>
        </div>

    )
}


const Navbar: React.FC  =(props) => {
    return(
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children} </ul>
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
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}
export default NavBarFunction;