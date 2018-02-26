const numberToReversedDigits = (number) => {
    // 1. Convert to a string
    // 2. Split the string into an array
    // 3. reverse the array
    // 4. Map each element of the array to a new array turing it back into an integer in the process
    return String(number).split('').reverse().map(str => parseInt(str));
}

export default numberToReversedDigits
