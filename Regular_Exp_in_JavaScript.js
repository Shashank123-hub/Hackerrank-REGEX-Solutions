'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    let re = /^([aeiou]).+\1$/
    //Component Breakdown:
    // ^: Searches for starting of the given string 
    // (): Searches according to specified pattern inside
    //  .: Searches for the entire string
    //  +: Searches for one or more times in the string
    //  \1: Checks for previously stored match
    //  $: Searches at the end of the string
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}
