    const n = parseInt(readLine().trim(), 10);  //Input bsae 10 number
    let max = 0;
    let current = 0;
        
    const binary = `${(n >>> 0).toString(2)}`;
    
    for(let i = 0; i < binary.length; i++){
        binary[i] == '0' ? current = 0 : current++;
        max = current > max ? current : max;
    }
    console.log(max);
