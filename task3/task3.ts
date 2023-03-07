export function findUniq(arr: number[]): number {
    if (arr.length < 3)
        throw new Error("Array must contain at least 3 numbers.");

    let result = 0;
    let sample: number;

    if (arr[0] === arr[1]) {
        sample = arr[0];
    } else {
        if(arr[0] === arr[2]){
            return arr[1];
        } else {
            return arr[0];
        }
    }

    for (let element of arr){
        if(element != sample){
            result = element;
            break;
        }
    }
    return result;
}
