// Assuming 'item' is an object with a 'mark' property

// Example 1: Checking if 'item.mark' exists and is truthy (not null, undefined, false, 0, or "")
if (item.mark) {
    // This block will execute if 'item.mark' is truthy
    console.log("item.mark is truthy");
} else {
    // This block will execute if 'item.mark' is falsy (null, undefined, false, 0, "", etc.)
    console.log("item.mark is falsy or undefined");
}

// Example 2: Checking if 'item.mark' is specifically true (not just truthy)
if (item.mark === true) {
    // This block will execute if 'item.mark' is exactly true
    console.log("item.mark is exactly true");
} else {
    // This block will execute if 'item.mark' is anything other than exactly true
    console.log("item.mark is not exactly true");
}
