import React from 'react';
import '../index.css';
import Toolbox from './toolbox.js';

const Previewer = (props) => {
return (
    <div layout className={props.minimized ? "preview-window-minimized" : "preview-window"}>
        <Toolbox 
        text='Previewer' 
        handleClick={props.handleClick} 
        maximized={props.maximized}
        />
        <div layout id="preview" dangerouslySetInnerHTML={{__html: props.currentCode}}>
        </div>
    </div>
)
}

export default Previewer;

