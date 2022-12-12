process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunks => input += chunks)
             .on('end', () => {
                 input = input.split('\n');
                 main(+input.shift());
             });

function main (T) {
    for (let t = 0; t < T; t++) {
        const [A, B] = input[t].split(' ').map(Number);
        if (A === 1 || B == 1 || (A % 2 && B % 2)) console.log('NO');
        else console.log('YES');
    }
};
