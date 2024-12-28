// Assuming jQuery is included in your project
const $element = $('#myElement');

// Add event listeners
$element.on('click', () => console.log('Clicked'));
$element.on('mouseover', () => console.log('Mouse Over'));

// Remove all event listeners
$element.off();
