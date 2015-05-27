const React = require("react");

const GameEnding = React.createClass({
    render() {
        return (<div className="panel word">
            {this.props.youWin ? <h1>You Won</h1> : <h1>You Lose</h1>}
        </div>);
    }
});

module.exports = GameEnding;

