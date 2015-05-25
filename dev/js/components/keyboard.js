const React = require("react");

const Keyboard = React.createClass({
  render(){
    return(
      <div className="keyboard panel">
        <Keyboard.Key letter="A"/>
        <Keyboard.Key letter="B"/>
        <Keyboard.Key letter="C"/>
      </div>
    )
  }
});

Keyboard.Key = React.createClass({
  render(){
    return(
      <div className="button keyboard-key">
        {this.props.letter}
      </div>
    )
  }
});

module.exports = Keyboard;
