const React = require("react");

const Word = React.createClass({

    isCorrectLetter(letter){
      return this.props.correctLetters.indexOf(letter) > -1;
    },

    render() {
    let chars = this.props.selectedWord.split('');
    return (<div className="panel word">
        {
            chars.map((letter, index)=>{
                return (
                    <button className="button" key={index} disabled={true}>
                        {
                            this.isCorrectLetter(letter)
                                ? letter
                                :"*"
                        }
                    </button>
                )
            })
        }
        </div>);
    }
});

module.exports = Word;
