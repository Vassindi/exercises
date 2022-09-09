function redundantReturn(str) {
        return function(returnThis) {
        return `Hope has arrived because ${str} am ${returnThis}.`;
    }
}

const allMight = redundantReturn("I");


console.log(allMight("here"));