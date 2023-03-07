export function isNarcissistic(value: number): boolean {
    if(value <= 0 || !Number.isInteger(value)){
        return false;
    }
    const numberOfDigits = value.toString().length;
    let result = 0;
    for (let i = 0; i < numberOfDigits; i++){
        result += Math.pow(+value.toString()[i], numberOfDigits);
    }
    return result === value;
}