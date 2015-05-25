const React = require("react");


//String.fromCharCode(65)
const Keyboard = React.createClass({

  render(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return(
      <div className="keyboard panel">
        {
          alphabet.map((letter, index)=>{
            return (
              <Keyboard.Key
                handleClickKey={this.props.handleClickKey}
                letter={letter}
                key={index}/>
              )
          })
        }
      </div>
    )
  }
});

Keyboard.Key = React.createClass({

  handleClick(e){
      console.log("WTF");
      e.preventDefault();
      this.props.handleClickKey(this.props.letter);
  },

  render(){
    return(
      <div
        className="button keyboard-key"
        onClick={this.handleClick}>
        {this.props.letter}
      </div>
    )
  }
});

module.exports = Keyboard;
