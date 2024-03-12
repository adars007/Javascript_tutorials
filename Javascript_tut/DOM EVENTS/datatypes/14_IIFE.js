// Immediatley Invoked Function Expression (IIFE)
// To avoid the global scope interfere in the function we use iife

// Syntax of IIFE
(function iife(){
    console.log("DB Connected");
})();// This parenthesis used to call the function

( (name) => {
    console.log(`DB CONEECTED TWO ${name}`);
})("Htesh");