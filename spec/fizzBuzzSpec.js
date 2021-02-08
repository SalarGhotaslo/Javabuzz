describe("FizzBuzz", function () {

    var fizzbuzz;

    beforeEach(function () {
        fizzbuzz = new FizzBuzz();
    });

    describe('knows when a number is', function () {
        it('divisible by 3', function () {
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });
        it('divisble by 5', function () {
            expect(fizzbuzz.isDivisiblebyFive(5)).toBe(true);
        });
        it('divisble by 3 & 5', function () {
            expect(fizzbuzz.isDivisiblebyThreeAndFive(15)).toBe(true);
        });
    });
    describe('knows when a number is NOT', function () {
        it('divisible by 3', function () {
            expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
        });
        it('divisible by 5', function () {
            expect(fizzbuzz.isDivisiblebyFive(1)).toBe(false);
        });
        it('divisble by 3 & 5', function () {
            expect(fizzbuzz.isDivisiblebyThreeAndFive(1)).toBe(false);
        });
    });
    describe('when playing, says', function () {

        it('"Fizz" when a number is divisible by 3', function () {
            expect(fizzbuzz.says(3)).toEqual("Fizz");
        });
        it('"Buzz" when a number is divisible by 5', function () {
            expect(fizzbuzz.says(5)).toEqual("Buzz");
        });
        it('"Fizz Buzz" when a number is divisible by 5 & 3', function () {
            expect(fizzbuzz.says(15)).toEqual("Fizz Buzz");
        });
    });
});
