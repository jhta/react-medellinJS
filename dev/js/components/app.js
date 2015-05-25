const React = require('react');

//Custom Components
const Keyboard = require('./keyboard');


const App = React.createClass({

  handleClickKey(key){
    alert(key);
  },

  render(){
    return(
      <div>
        <Keyboard handleClickKey={this.handleClickKey} />
      </div>
    )
  }
});


module.exports = App;
