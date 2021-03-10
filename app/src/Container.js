import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
//marked converts text to markup text
import marked from 'marked';
import './App.css'

export default class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.handleText = this.handleText.bind(this)
    }

    componentDidUpdate(){ 
        document.getElementById('preview').innerHTML = marked(`${this.state.text}`)
     }

    handleText(text){
        this.setState({
            text
        })
    }

    render() {
        return (
            <div className='container'>
                <Editor handleText={this.handleText}/>
                <div className='convertor'></div>
                {/* don't use text property in preview because markup doesn't work for some reason.
                Used componentDidMount instead to populate Previewer */}
                <Preview text={this.state.text}/>
            </div>
        )
    }

}