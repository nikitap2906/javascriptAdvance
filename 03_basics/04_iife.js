// Immediately Invoked Function Expressions (IIFE)


// ++++++++++++ name IIFE ++++++++++++

(function chai () { 
    console.log(`DB CONNECTED`);
    
})();
// chai()

// ++++++++++++ undon IIFE +++++++++++

(  () => {
    console.log(`DB CONNECTED TWO`);
    
})();


// ++++++++++++ peramitr IIFE +++++++++++

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("nikita");

// chai("nikita")