const React = require('react');

//Custom Components
const Keyboard = require('./keyboard');
const Hangman = require('./hangman');
const Word = require('./word');
const GameEnding = require('./gameEnding');


const App = React.createClass({

  getInit(){
    this.selectWord = 'sol';
    return {
      correctLetters: [],
      attempts: 0,
      totalAttempts: 7,
      incorrectLetters: []
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
    if(this.containsLetter(key)){
      var correctLetters = this.state.correctLetters;
      correctLetters.push(key);
      this.setState({
        correctLetters: correctLetters
      });
    } else {
        var incorrectLetters = this.state.incorrectLetters;
        incorrectLetters.push(key);
      this.setState({
        attempts: this.state.attempts + 1,
          incorrectLetters: incorrectLetters
      });
    }
  },

  containsLetter(letter){
    return this.selectWord.indexOf(letter) > -1;
  },

  render(){
    let attempts = this.state.attempts;
    let totalAttempts = this.state.totalAttempts;
    let correctLetters = this.state.correctLetters;
    let incorrectLetters = this.state.incorrectLetters;
      let youLose = attempts == totalAttempts;
      let youWin = false;
    return(
      <div>
        <Hangman attempts={attempts}/>
        <Word selectedWord={this.selectWord} attempts={attempts}
              correctLetters={correctLetters} totalAttempts={totalAttempts}/>

          {
              youLose || youWin
                  ? <GameEnding youWin={youWin}/>
                  : <Keyboard handleClickKey={this.handleClickKey}
                              correctLetters={correctLetters}
                              incorrectLetters={incorrectLetters}/>
          }
      </div>
    )
  }
});


module.exports = App;
