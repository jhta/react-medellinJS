const React = require('react');

//Custom Components
const Keyboard = require('./keyboard');


const App = React.createClass({

  handleClickKey(e){
    e.preventDefault();

  },

  render(){
    return(
      <div>
        <Keyboard />
      </div>
    )
  }
});


module.exports = App;
