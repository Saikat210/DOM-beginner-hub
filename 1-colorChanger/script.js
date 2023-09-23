/**
 * 1. select all button element.
 * 2. select body element, because our main agenda is to change the color of the body
 */

const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'seagreen';
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }

        // switch (e.target.id) {
        //   case 'grey':
        //     body.style.backgroundColor = 'seagreen';
        //     break;
        //   case 'white':
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case 'blue':
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   case 'yellow':
        //     body.style.backgroundColor = e.target.id;
        //     break;
        //   default:
        //     // Handle cases where e.target.id doesn't match any of the above
        //     break;
        // }
    });
});

