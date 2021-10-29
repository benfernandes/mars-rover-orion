import React from "react"
import './styles.scss'

const RoverFilter: React.FC = (props) => {
    return <div className="rover-image">
        {props.children}
        <div className="filter"></div>
    </div>
}

export default RoverFilter;