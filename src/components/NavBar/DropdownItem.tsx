import React, {ReactElement} from "react";

interface DropdownItemProps {
    children?: React.ReactNode;
    goToMenu?: string;
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    setActiveMenu: Function;
}

export const DropdownItem: React.FC<DropdownItemProps> = (props: DropdownItemProps) => {
    return (
        <div className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </div>
    )
}