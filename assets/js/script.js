/**
 * This function return a HTML button by giving it a label and a parameter, in this case a function 
 * @param {string} label 
 * @param {parameter} clickHandler 
 * @returns 
 */
function createButton(label, clickHandler) {
    var button = document.createElement("button");
    button.textContent = label;
    button.onclick = clickHandler;
    return button;
}

/**
 * This function checks whether the output element already exists, and if so, updates it; 
 * otherwise, it creates a new output item and adds it to the "counterGrid"
 * @param {number} value 
 */
function updateCounter(value) {
    let counterElement = document.getElementById("output");
    if (counterElement) {
        counterElement.textContent = value;
    } else {
        let counterContainer = document.getElementById("counterGrid");
        counterElement = document.createElement("div");
        counterElement.id = "output";
        counterElement.textContent = value;
        counterContainer.appendChild(counterElement);
    }
}

/**
 * The number displayed on screen initialized at 0
 */
var currentCount = 0;

/**
 * This function increments the curretCount parameter by one and calls the updateCounter function 
 */
function increment() {
    currentCount++;
    updateCounter(currentCount);
}

/**
 * This function decrements the curretCount parameter by one and calls the updateCounter function
 */
function decrement() {
        currentCount--;
        updateCounter(currentCount);
}

/**
 * In this case the updateCounter function is used to initialize the div used to display the currentCount value 
 */
updateCounter(currentCount);

/**
 * creation of the + and - buttons
 */
var incrementButton = createButton("+", increment);
var decrementButton = createButton("-", decrement);

/**
 * inserting button positions into HTML
 */
var counterContainer = document.getElementById("counterGrid");
counterContainer.appendChild(incrementButton);
counterContainer.appendChild(decrementButton);


