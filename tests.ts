import "mocha";
import { expect } from 'chai';
import {isNarcissistic} from "./task2/task2";

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