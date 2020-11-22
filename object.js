console.clear();

const elvin = {
    name: 'Elvin',
    age: 37,
    gender: 'male',
}

const users = [
    {
        name: 'Anar',
        gender: 'male'
    },
    {
        name: 'Ismayil',
        gender: 'male'
    },
    {
        name: 'Aytan',
        gender: 'female'
    },
];

function getUserNamesWithTitles(arrayOfUsers) {
    const namesWithTitles = [];

    for (let i = 0; i < arrayOfUsers.length; i++) {
        const currentUser = arrayOfUsers[i];

        if (currentUser.gender === 'male') {
            const nameWithTitle = 'Mr. ' + currentUser.name;
            namesWithTitles.push(nameWithTitle);
        } else {
            const nameWithTitle = 'Ms. ' + currentUser.name;
            namesWithTitles.push(nameWithTitle);
        }
    }

    return namesWithTitles;
}

const names = getUserNamesWithTitles(users);

// console.log(names);

const accounts = [
    {
        balance: 1000,
        currency: 'USD',
        isActive: true,
    },
    {
        balance: 3000000,
        currency: 'AZN',
        isActive: false,
    }
]

function getAZNAccounts(arrayOfAccounts) {
    const aznAccounts = [];

    for (let i = 0; i < arrayOfAccounts.length; i++) {
        if (arrayOfAccounts[i].currency === 'AZN') {
            aznAccounts.push(arrayOfAccounts[i]);
        }
    }

    return aznAccounts;
}

// const car = {
//     name: 'Bentley',
//     year: 2017,
//     drivedDistance: 36000,
//     allowedPetrolCodes: ['95', '98', '102'],
//     features: {
//         ABS: true,
//         autoParking: true,
//         seatHeater: {
//             frontSide: true,
//             backSide: false,
//         }
//     }
// }

const cars = [
    {
        name: 'Bentley',
        year: 2017,
        drivedDistance: 36000,
        allowedPetrolCodes: ['95', '98', '102'],
        features: {
            ABS: true,
            autoParking: true,
            seatHeater: {
                frontSide: true,
                backSide: false,
            }
        }
    },
    {
        name: 'BMW',
        year: 2018,
        drivedDistance: 40000,
        allowedPetrolCodes: ['95', '98', '102'],
        features: {
            ABS: true,
            autoParking: true,
            seatHeater: {
                frontSide: true,
                backSide: true,
            }
        }
    },
    {
        name: 'LADA',
        year: 2010,
        drivedDistance: 100000,
        allowedPetrolCodes: ['92', '95'],
        features: {
            ABS: false,
            autoParking: false,
            seatHeater: {
                frontSide: false,
                backSide: false,
            }
        }
    },
    {
        name: 'Mercedes',
        year: 2020,
        drivedDistance: 0,
        allowedPetrolCodes: ['95', '98'],
        features: {
            ABS: true,
            autoParking: true,
            seatHeater: {
                frontSide: true,
                backSide: true,
            }
        }
    },
]

function getCarsWithBothSideHeaters(arrayOfCars) {
    const results = [];

    for (let i = 0; i < arrayOfCars.length; i++) {
        const currentCar = arrayOfCars[i];

        if (currentCar.features.seatHeater.frontSide && currentCar.features.seatHeater.backSide) {
            results.push(currentCar);
        }
    }

    return results;
}

const carsWithHeaters = getCarsWithBothSideHeaters(cars);

console.log(carsWithHeaters);
