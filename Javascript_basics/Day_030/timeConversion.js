'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function timeConversion(s) {
    let result = '';
    if(s.includes('PM')){
        const a = s.slice(0, -2).split(':');
        if(a[0] != '12'){
            a[0] = (Number(a[0]) + 12).toString();
        }
        result = a.join(':')
    }else if(s.includes('AM')){
        const a = s.slice(0, -2).split(':')
        if(a[0] == '12'){
            a[0] = '00';
        }
        result = a.join(':');}
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
