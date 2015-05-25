const React = require("react");

const Word = React.createClass({
    render() {
    return (<div className="panel word">
            <h1>{${this.props.attempts}/${this.props.totalAttempts}}</h1>
        </div>);
    }
});

module.exports = Word;
