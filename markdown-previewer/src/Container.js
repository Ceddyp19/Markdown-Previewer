import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import marked from 'marked';

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
            <div>
                <Editor handleText={this.handleText}/>
                <Preview text={this.state.text}/>
            </div>
        )
    }

}