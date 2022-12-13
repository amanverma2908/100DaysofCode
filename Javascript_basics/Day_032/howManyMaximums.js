process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunks => input += chunks);
process.stdin.on('end', () => {
    input = input.split('\n');
    start(input.shift());
});

const start = function (T) {
    for (let i = 0; i < T; i++) {
        let count = 0;
        for (let j = 1, binary = 0+input[i*2+1]+1; j < +input[i*2]+1; j++)
            if (+binary[j] && !+binary[j-1])
                count++;
        console.log(count);
    }
};
