import React from 'react';

const defaultText = "# Welcome to my React Markdown Previewer!"

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

   handleChange(event){
     this.setState({
         text: event.target.value
     })

     this.props.handleText(event.target.value)
   }

    render() {
        return (
            <div><textarea id='editor' value={this.state.text} placeholder="Editor" onChange={this.handleChange}/></div>
        )
    }
}

export default Editor;

