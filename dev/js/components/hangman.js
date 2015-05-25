const React = require("react");


//String.fromCharCode(65)
const Hangman = React.createClass({
    render() {
        return (
            <div className="panel hangman">
                <svg xmlns="http://www.w3.org/2000/svg">
                <!-- Created with SVG-edit - http://svg-edit.googlecode.com/ -->
                    <g>
                        <title>Layer 1</title>
                        <rect id="svg_6" height="22" width="353" y="414" x="151" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <rect id="svg_7" height="337.99998" width="34" y="73.00001" x="468" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <rect id="svg_8" height="15" width="230.00001" y="56" x="273" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_13" y2="107" x2="312" y1="77" x1="311" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <ellipse ry="34" rx="32" id="svg_14" cy="142" cx="312" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_15" y2="179" x2="310" y1="290" x1="311" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_16" y2="190" x2="308" y1="226" x1="261" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_17" y2="188" x2="309" y1="231" x1="361" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_18" y2="286" x2="310" y1="361" x1="276" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                        <line id="svg_19" y2="280" x2="311" y1="364" x1="336" stroke-linecap="null" stroke-linejoin="null" stroke-width="5" stroke="#000000" fill="none"/>
                    </g>
                </svg>
            </div>
        );
    }
});

module.exports = Hangman;