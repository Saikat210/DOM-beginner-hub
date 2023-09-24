const froms = document.querySelector('form');
froms.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please Give a valid number';
        // alert('Please Give a valid number');
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please Give a valid number';
        // alert('Please Give a valid number');
    } else {
        const bmi = calculateBMI(weight, height);
        //Show the result
        results.innerHTML = `BMI: <span>${bmi.toFixed(2)}</span>`;
        // Guide compare
        if (results < 18.6) {
            guide.innerHTML = 'Under Weigh'
        } else if (results > 18.6 || results < 24.9) {
            guide.innerHTML = 'Normal Range '
        } else {
            guide.innerHTML = 'Overweight'
        }
    }
});
// BMI calculation
function calculateBMI(weight, height) {
    return weight / ((height * height) / 10000);
}

/**
 * preventDefault()
 * - `preventDefault` is a JavaScript method that stops the default behavior of an event, such as preventing a form from being submitted or stopping a link from navigating to a new page. It's often used to implement custom behavior for events.
 */
