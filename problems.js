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
