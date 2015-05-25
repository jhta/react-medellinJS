const React = require('react');

//Custom Components
const Keyboard = require('./keyboard');


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
        <div className="panel">
          <h1>{`${attempts}/${totalAttempts}`}</h1>
        </div>
        <Keyboard handleClickKey={this.handleClickKey} />
      </div>
    )
  }
});


module.exports = App;
