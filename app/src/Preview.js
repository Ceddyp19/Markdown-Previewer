import './App.css';
import marked from 'marked';

function Preview(props) {
    return (
        <div className='preview-wrapper'>
            <div className='toolbar'>Previewer</div>
            <div id='preview'></div>
        </div>
    )
}

export default Preview;