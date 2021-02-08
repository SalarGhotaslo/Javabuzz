class FizzBuzz {
    _isDivisibleBy(number, divisor) {
        return (number % divisor === 0)
    }
    isDivisibleByThree(number) {
        return this._isDivisibleBy(number, 3)
        // return (number % 3 === 0);
    }
    isDivisiblebyFive(number) {
        return this._isDivisibleBy(number, 5)
    }
    isDivisiblebyThreeAndFive(number) {
        return this._isDivisibleBy(number, 15)
    }
    says(number) {
        if (this.isDivisiblebyThreeAndFive(number)) {
            return "Fizz Buzz"
        }
        if (this.isDivisibleByThree(number)) {
            return "Fizz"
        }
        if (this.isDivisiblebyFive(number)) {
            return "Buzz"
        }
        return number;
    }
}