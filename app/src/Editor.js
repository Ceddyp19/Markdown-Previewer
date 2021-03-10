import React from 'react';
import './App.css';

const section1 = "# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n### To find where I came up with this project go to [Free Code Camp](https://www.freecodecamp.org/). \n Just for fun check out this code block, inside a `<div></div>`. \n"
const codeblock = "```\n  //this is multi-line code: \n  function hello() { \n   return console.log('sup') \n } \n``` \n"
const section2 = "You can also make text **bold**... whoa! \n Or _italic_. \n Or... wait for it... **_both!_** \n And feel free to go crazy ~~crossing stuff out~~. \n There's also: \n > Block Quotes! \n And if you want to get really crazy, even tables: \n \n"
const table = "Wild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it. \n \n"
const section3 = "- And of course there are lists. \n  - Some are bulleted. \n    - With different indentation levels. \n      - That look like this. \n \n  1. And there are numbererd lists too. \n 1. And last but not least, let's not forget embedded images: \n \n"
const image = "![Playboi Carti Whole Lotta Red ablum cover](https://images-na.ssl-images-amazon.com/images/I/91UYn-YKMgL._SL1500_.jpg)"
const defaultText = section1 + codeblock + section2 + table + section3 + image;

class Editor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            text: defaultText
        })

        this.props.handleText(defaultText)
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })

        this.props.handleText(event.target.value)
    }

    render() {
        return (
            <div className='editor-wrapper'>
                <div className='toolbar'>Editor</div>
                <textarea id='editor' value={this.state.text} placeholder="Editor" onChange={this.handleChange}></textarea>
            </div>
        )
    }
}

export default Editor;

