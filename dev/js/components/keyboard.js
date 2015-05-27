const React = require("react");


//String.fromCharCode(65)
const Keyboard = React.createClass({

  render(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return(
      <div className="keyboard panel">
        {
          alphabet.map((letter, index)=>{
              let state = this.props.incorrectLetters.indexOf(letter) > -1
                  ? 'wrong' : this.props.correctLetters.indexOf(letter) > -1
                  ? 'ok': null;
            return (
              <Keyboard.Key
                handleClickKey={this.props.handleClickKey}
                letter={letter}
                key={index}
                  state={state}/>
              )
          })
        }
      </div>
    )
  }
});

Keyboard.Key = React.createClass({

  handleClick(e){
      e.preventDefault();
      this.props.handleClickKey(this.props.letter);
  },

  render(){
      let className = 'button keyboard-key' + (this.props.state === 'ok' ? ' ok' : '');
    return(
      <button
          disabled={this.props.state === 'wrong'}
        className={className}
        onClick={this.handleClick}>
        {this.props.letter}
      </button>
    )
  }
});

module.exports = Keyboard;
