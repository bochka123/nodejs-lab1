import "mocha";
import {assert, expect} from 'chai';
import {isNarcissistic} from "./task2/task2";
import {sumOfIntervals} from "./task1/task1";
import {findUniq} from "./task3/task3";

describe("Task 1", function() {
    it("basic tests", function() {
        assert.strictEqual(sumOfIntervals([[1, 5]]), 4);
        assert.strictEqual(sumOfIntervals([[1, 5], [6, 10]]), 8);
        assert.strictEqual(sumOfIntervals([[1, 5], [1, 5]]), 4);
        assert.strictEqual(sumOfIntervals([[1, 4], [7, 10], [3, 5]]), 7);
    });
    it("large numbers", function() {
        assert.strictEqual(sumOfIntervals([[-1e9, 1e9]]), 2e9);
        assert.strictEqual(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40]]), 1e8 + 30);
    });
    const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
    function sol(intervals: [number, number][]) {
        const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
        let sum = 0, right = -Infinity;
        for (const [x, y] of sorted) {
            if (x >= right) {
                sum += y - x;
            } else if (y > right) {
                sum += y - right;
            }
            right = Math.max(right, y);
        }
        return sum;
    }

    it('Small tests', function() {
        for (let i = 0; i < 100; i++) {
            const arr = Array(rand(1, 20)).fill(0).map(() => {
                const x = rand(-500, 499);
                return <[number, number]>[x, rand(x + 1, 500)];
            });
            let result = sol(arr);
            assert.strictEqual(sumOfIntervals(arr), result);
        }
    });

    it('Large tests', function() {
        for (let i = 0; i < 100; i++) {
            const arr = Array(rand(10, 200)).fill(0).map(() => {
                const x = rand(-1e9, 1e9 - 1e7);
                const w = rand(1e6, 1e7);
                return <[number, number]>[x, x + w];
            });
            const result = sol(arr);
            assert.strictEqual(sumOfIntervals(arr), result);
        }
    });
});

describe('Task 2 tests', () => {
    it('Basic test should work', () => {
        expect(isNarcissistic(7)).to.equal(true, '7 is narcissistic');
        expect(isNarcissistic(10)).to.equal(false, '10 is not narcissistic');
        expect(isNarcissistic(123)).to.equal(false, '123 is not narcissistic');
        expect(isNarcissistic(153)).to.equal(true, '153 is narcissistic');
        expect(isNarcissistic(1634)).to.equal(true, '1634 is narcissistic');
        expect(isNarcissistic(2000)).to.equal(false, '2000 is not narcissistic');
    });
    it('Wrong input tests', ()=>{
        expect(isNarcissistic.bind(-7)).to.throw("Wrong input");
        expect(isNarcissistic.bind(7.214)).to.throw("Wrong input");
        expect(isNarcissistic.bind(-7.214)).to.throw("Wrong input");
    })
    const nums = [8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050, 24678051];

    nums.forEach((num) => {
        const res = solution(num);

        it(`Testing for ${num}`, () => {
            expect(isNarcissistic(num)).to.equal(solution(num), `${num} is ${res ? '' : 'not'} narcissistic`);
        })
    })
    function randomNumber(min: number, max: number) {
        return ~~(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 20; i += 1){
        const num = randomNumber(0, 9999);
        const res = solution(num);

        it(`Testing for ${num}`, () => {
            expect(isNarcissistic(num)).to.equal(solution(num), `${num} is ${res ? '' : 'not'} narcissistic`);
        });
    }
    function solution(value: number): boolean {
        return value.toString().split('').reduce((acc, el, _, arr) => acc + Number(el) ** arr.length, 0) === value;
    }
});

describe('Task 3', function(){
    it('should handle sample cases', () => {
        assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
        assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
    });

    it('should handle basic cases', () => {
        // Basic tests (shuffled)
        assert.strictEqual(findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]),3);
        assert.strictEqual(findUniq([ 5, 5, 5, 5, 4, 5, 5, 5 ]),4);
        assert.strictEqual(findUniq([ 6, 6, 6, 6, 6, 5, 6, 6 ]),5);
        assert.strictEqual(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]),6);
        // The last item
        assert.strictEqual(findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]),7);
        assert.strictEqual(findUniq([ 3, 3, 2, 3, 3, 3, 3, 3 ]),2);
        assert.strictEqual(findUniq([ 2, 1, 2, 2, 2, 2, 2, 2 ]),1);
        // The first item
        assert.strictEqual(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]),0);
    });

    it('should handle edge cases', () => {
        // Very big number
        assert.strictEqual(
            findUniq(generateTestArr(Math.pow(2, 40), Math.pow(2, 50), 100)) , Math.pow(2, 40)
        );

        // Negative number
        assert.strictEqual(
            findUniq(generateTestArr(-1, 1, 1000)) , -1
        );

        // Float number
        assert.strictEqual(
            findUniq(generateTestArr(0.0000001, 0.0010001, 1000)) , 0.0000001
        );

        // Infitiy and -Infiity
        assert.strictEqual(
            findUniq(generateTestArr(-Infinity, Infinity, 1000)) , -Infinity
        );
    });

    it('should handle huge array', () => {
        assert.strictEqual(
            findUniq(generateTestArr(42, 24, 10000000)),42
        );
    });

    it('should handle random case', () => {
        let a = Math.random();
        let b = Math.random();
        assert.strictEqual(
            findUniq(generateTestArr(a, b, 1000)) , a
        );
    });
    function generateTestArr(answer: number, mass: number, length: number): Array<number> {
        let arr = [];
        // Generate random integer in [0, length)
        let answerIndex = Math.floor(Math.random() * length);

        // Fill the array with mass and answer
        for (let i = 0; i < length; i++) {
            // Answer will be on answerIndex
            arr.push(i === answerIndex ? answer : mass);
        }

        return arr;
    }
});