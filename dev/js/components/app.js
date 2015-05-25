const React = require('react');

//Custom Components
const Keyboard = require('./keyboard');
const Hangman = require('./hangman');
const Word = require('./word');


const App = React.createClass({

  getInit(){
    return {
      attempts: 0,
      totalAttempts: 5
    }
  },

  getInitialState(){
    return this.getInit();
  },

  compareValues(){
    if(this.state.attempts == this.state.totalAttempts) {
      alert("You Lose!!");
      this.setState(this.getInit());
    }
  },

  handleClickKey(key){
    //alert(key);
    let attempts = this.containsLetter(key)? this.state.attempts : this.state.attempts+1;
    this.setState({
      attempts: attempts,
      totalAttempts: 5
    })

    this.compareValues();
  },

  containsLetter(letter){
    return letter == "a";
  },

  render(){
    let attempts = this.state.attempts;
    let totalAttempts = this.state.totalAttempts;

    return(
      <div>
        <Hangman />
        <Word attempts={attempts} totalAttempts={totalAttempts}/>
        <Keyboard handleClickKey={this.handleClickKey} />
      </div>
    )
  }
});


module.exports = App;
