// range of numbers by diapason
function range (start, end, step, isRight) {
    let args = [...arguments]
    args = args.filter(x => x !== undefined)
    let result = []
    let argsCount = isRight === undefined ? args.length : args.length -1
    step = step === undefined ? 1 : step;
    if ( argsCount=== 1) {
        end = start
        start = 0;
    } else {
        start = start === undefined ? 0 : start;
        end = end === undefined ? 0 : end;
    }
    if (step === 0){
        _step0(start, end, step, result)
    }
    else if (start < end && step >= 0 || (argsCount === 1 && end === 0)){
        _positiveDirection(start, end, step, result)
    }
    else if (start > end){
        _negativeDirection(start, end, step, result)
    }
    result = isRight ? result.reverse() : result
    return result
};

let _positiveDirection = function (start, end, step, result){
    let i = start;
    while (i < end) {
        result.push(i);
        i += step;
    }
}

let _step0 = function (start, end, step, result){
    let len = Math.abs(start - end)
    let i = 1;
    while (i <= len) {
        result.push(start);
        i += 1;
    }
}

let _negativeDirection = function (start, end, step, result){
    step = Math.abs(step)
    let i = start;
    while (i > end) {
        result.push(i);
        i -= step;
    }
}

function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []


// range(4, undefined, undefined); // => [0, 1, 2, 3]
// range(-4, undefined, undefined); // => [0, -1, -2, -3]
// range(1, 5); // => [1, 2, 3, 4]
// range(0, 20, 5); // => [0, 5, 10, 15]
// range(0, -4, 1); // => [0, -1, -2, -3]
// range(1, 4, 0); // => [1, 1, 1]
// range(8, 4, 0); // => [1, 1, 1]
// range(0); // => []
