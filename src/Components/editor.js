import React from 'react';
import '../index.css';
import Toolbox from './toolbox.js';

const Editor = (props) => {
  return (
    <div className={props.minimized ? "editor-window-minimized" : "editor-window"}>
    <Toolbox 
    text='Editor' 
    handleClick={props.handleClick}
    maximized={props.maximized}
    />
      <textarea onChange={(e) => props.handleText(e)} id="editor" className={props.maximized ? "textarea-maximized" : ''}>
        {props.text}
      </textarea>
    </div>
  )
}

export default Editor;
