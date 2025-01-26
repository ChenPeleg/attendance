
const baseCss = `

 
.circleLoader {
    background-color: white;
    border: 2px solid rgba(0, 0, 0, 0.6);
    border-radius: 50% 50%;
    padding-top: 0.19rem;
    padding-left: 0.05rem;

    position: relative;
    display: inline-block;

    width: calc(var(--check-height)*1.7);
    height: calc(var(--check-height)*1.7);
}

.checkmark {
    top: -0.3rem;
    position: relative;
    display: block;
}
.checkmark.draw:after {
    animation-duration: 1000ms;
    animation-timing-function: ease;
    animation-name: checkmark-animation;
    width: 0;
    height: 0;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    transform: scaleX(-1) rotate(135deg);
    left: 0.1em;

}

.checkmark:after {
    opacity: 0;
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



@keyframes checkmark-animation {
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
`
const variableMap = {

    '--check-height': '0.8em',
    '--check-width': '0.45em',
    '--check-left': '0.5em',
    '--check-thickness': '4px',
    '--check-color': '#01660c',
    '--loader-size': '1.0em',
}
export const checkMarkStyleWithAnimation =  Object.entries(
    variableMap
).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`var\\(${key}\\)`, 'gm'), value)
}, baseCss)




