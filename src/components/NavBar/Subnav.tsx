import React, {ReactElement, ReactNode, useState} from "react";

interface SubnavProps {
    children: ReactNode;
    icon: ReactElement;
}

export const Subnav: React.FC<SubnavProps> = (props: SubnavProps) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="subnav">
            <button className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </button>
            {open && props.children}
        </li>
    )
}