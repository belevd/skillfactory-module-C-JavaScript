function example(func) {
    // argFunc()
    func();

    return function() {
        console.log('internal function')
    }
}

function argFunc() {
    console.log('function from arguments')
}

let resultFunc = example(argFunc);

resultFunc();