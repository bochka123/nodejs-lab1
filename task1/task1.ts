export function sumOfIntervals(ins: [number, number][]) {
    ins.sort((a, b) => a[0] - b[0]);
    let interval : number = 0
    for (let i = 0; i < ins.length - 1; i++) {
        if (ins[i][1] >= ins[i+1][0]) {
            ins[i+1][0] = ins[i][0]
            if (ins[i][1] >= ins[i+1][1]) {
                ins[i+1][1] = ins[i][1]
            }
            delete ins[i]
        }
    }
    ins.forEach(el => {if (el !== undefined) {interval += el[1] - el[0]}})
    return interval
}