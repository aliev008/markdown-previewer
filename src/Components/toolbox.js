import React from 'react'
import '../index.css';

const Toolbox = (props) => {
    return (
        <div className="tool-box" onClick={() => props.handleClick()}>
            <div>
                <i className="fa-brands fa-free-code-camp"></i>
                {props.text}
            </div>
            <i id='expander' className={props.maximized ? "fa fa-compress" : "fa fa-arrows-alt"}></i>
            </div>
    )
}

export default Toolbox;
