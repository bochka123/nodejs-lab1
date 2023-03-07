import "mocha";
import {assert, expect} from 'chai';
import {isNarcissistic} from "./task2/task2";
import {sumOfIntervals} from "./task1/task1";

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