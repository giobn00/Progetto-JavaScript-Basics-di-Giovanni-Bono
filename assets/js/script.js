const increse = document.getElementById("increment");
const decrese  = document.getElementById("decrement");
var counterElement = document.getElementById("counter");

/**
 * Listen to increment events
 */
increse.addEventListener('click', ()=>{
    counterElement.textContent = increment(counterElement.textContent);
})

/**
 * Listen to decrement events
 */
decrese.addEventListener('click', ()=>{
    counterElement.textContent = decrement(counterElement.textContent);
})

/**
 * this function increments by one the input parameter
 * @param {string} counter value to be incremented
 * @returns {Number} return the incremented value
 */
function increment(counter) { 
    return parseInt(counter) + 1;
}

/**
 * this function decrements by one the input parameter
 * @param {string} counter value to be decremented
 * @returns {Number} return the decremented value
 */
function decrement(counter) {
    return parseInt(counter) - 1;
}

