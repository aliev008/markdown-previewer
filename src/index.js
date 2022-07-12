import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { marked } from 'marked';
import Prism from 'prismjs';
import Editor from './Components/editor.js';
import Previewer from './Components/previewer.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      defaultText: placeholder,
      currentCode: '',
      editorMaximized: false,
      previewMaximized: false,
    }
    this.handleText = this.handleText.bind(this);
    this.previewHandleClick = this.previewHandleClick.bind(this);
    this.editorHandleClick = this.editorHandleClick.bind(this);
  }

  componentDidMount() {
    this.setState({currentCode: marked.parse(this.state.defaultText)});
  }

  handleText(e) {
    this.setState({
      currentCode: marked.parse(e.target.value),
    })
  }

  previewHandleClick() {
    this.setState({
      previewMaximized: !this.state.previewMaximized,
    }) }
  
  editorHandleClick() {
    this.setState({
      editorMaximized: !this.state.editorMaximized,
    })
  }

  render() {
    console.log(`this.state.previewMaximized = ${this.state.previewMaximized}`);
    console.log(`this.state.editorMaximized = ${this.state.editorMaximized}`);

    return (
      <div className='wrapper'>
        <Editor 
        text={this.state.defaultText}
        handleText={this.handleText}
        minimized={this.state.previewMaximized}
        maximized={this.state.editorMaximized}
        handleClick={this.editorHandleClick}    
        />
        <Previewer 
        maximized={this.state.previewMaximized}
        currentCode={this.state.currentCode}
        handleClick={this.previewHandleClick}    
        minimized={this.state.editorMaximized}
        />
      </div>
    )
  }
}




// Parser settings

const renderer = {
  heading(text, level) {
    if (level === 1) {
      return `
      <h${level} id="headerOne">
        <a className="anchor">
          <span className="header-link"></span>
        </a>
        ${text}
      </h${level}>`;
    }
    if (level === 2) {
      return `
      <h${level} id="headerTwo">
        <a className="anchor">
          <span className="header-link"></span>
        </a>
        ${text}
      </h${level}>`;
    }
    
    return `
    <h${level}>
      <a className="anchor">
        <span className="header-link"></span>
      </a>
      ${text}
    </h${level}>`;
  }
}


marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
})
marked.use({ renderer });


//-------------


// Default Text

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;



//------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

