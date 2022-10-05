    const n = parseInt(readLine().trim(), 10);  //Input bsae 10 number
    let max = 0;
    let current = 0;
        
    const binary = `${(n >>> 0).toString(2)}`; //Convert to binary number and change it to an String
    
    for(let i = 0; i < binary.length; i++){     //Loop to traverse the String 
        binary[i] == '0' ? current = 0 : current++;     // Check weather the current character == 0, if true => cahnge current to 0 else increment 
        max = current > max ? current : max;    // check greatest among max and current and assign it to max 
    }
    console.log(max);   //print max
