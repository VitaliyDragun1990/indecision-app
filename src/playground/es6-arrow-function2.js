// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(150, 25, 1001));

// this keyword - no longer bound

const user = {
    name: 'Jack',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(`${that.name} has lived in ${city}`)
        // });
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 5],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());