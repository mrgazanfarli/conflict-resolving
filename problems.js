console.clear();

// SUM

function getSumIndexes(arrayOfNumbers, target) {
    // array = [11, 15, 2, 7]
    // target = 9
    const result = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        // i = 3
        const currentNumber = arrayOfNumbers[i];
        // currentNumber = 2

        for (let j = i + 1; j < arrayOfNumbers.length; j++) {
            // j = 4
            if (currentNumber + arrayOfNumbers[j] === target) {
                result.push(i, j);
                break;
            }
        }
    }

    return result;
}

// console.log(getSumIndexes([11, 15, 2, 7], 9));

// Remove element

/*
The function takes an array and an element, and removes each reference of the element from the array.
Then, returns the length of new array
*/

// [1, 2, 3, 3, 4, 6, 3, 7]
function removeValueFromArray(array, value) {
    let j = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== value) {
            array[j] = array[i];
            j++;
        }
    }

    return j;
}

console.log(removeValueFromArray([1, 2, 3, 3, 4, 6, 3, 7], 3));



