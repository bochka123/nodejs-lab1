export function sumOfIntervals(intervals: [number, number][]) {
    let interval : number
    intervals.forEach(element => interval += element[1] - element[0])
}

sumOfIntervals([[1, 5]])