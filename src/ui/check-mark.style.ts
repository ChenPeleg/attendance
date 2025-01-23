const baseCss = `

.checkmark {
    display: block;


}
.checkmark.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
    left: -0.0em;
    bottom: 0.1em;
}

.checkmark:after {
    opacity: 1;
    height: var(--check-height);
    width: var(--check-width);
    transform-origin: left top;
    border-right: var(--check-thickness) solid var(--check-color);
    border-top: var(--check-thickness) solid var(--check-color);
    content: '';
    left: var(--check-left);
    top: var(--check-height);
    position: absolute;
}

  /*convert to css*/

.circleLoader {
    margin-bottom: calc(var(--check-height)/1.7);
    /*border: 1px solid rgba(0, 0, 0, 0.2);*/
    /*border-left-color:  var(--check-color);*/
    /*animation: loader-spin 1.2s infinite linear;*/
    position: relative;
    display: inline-block;
    /*vertical-align: top;*/
    /*border-radius: 50%;*/
    width: var(--check-height);
    height: var(--check-height);
}

@keyframes checkmark {
    0% {
        height: 0;
        width: 0;
        opacity: 1;
    }
    20% {
        height: 0;
        width: var(--check-width);
        opacity: 1;
    }
    40% {
        height: var(--check-height);
        width: var(--check-width);
        opacity: 1;
    }
    100% {
        height: var(--check-height);
        width: var(--check-width);
        opacity: 1;
    }
}
`
const variableMap = {

    '--check-height': '1.0em',
    '--check-width': '0.5em',
    '--check-left': '0.6em',
    '--check-thickness': '3px',
    '--check-color': '#5cb85c',
    '--loader-size': '1.2em',

}
export const checkMarkStyle =  Object.entries(
    variableMap
).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`var\\(${key}\\)`, 'gm'), value)
}, baseCss)

console.log(checkMarkStyle)



