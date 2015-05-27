const React = require("react");

const Word = React.createClass({
    render() {
    let chars = this.props.selectedWord.split('');
    return (<div className="panel word">
        {
            chars.map((letter, index)=>{
                return (
                    <button className="button" key={index} disabled={true}>
                        {
                            this.props.correctLetters.indexOf(letter) > -1
                                ? letter
                                :null
                        }
                    </button>
                )
            })
        }
        </div>);
    }
});

module.exports = Word;
