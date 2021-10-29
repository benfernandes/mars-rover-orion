import React from "react";
import './styles.scss'

const FloatingText: React.FC = (props) => {
    return <div className='floating-text'>
        {props.children}
    </div>
}

export default FloatingText;