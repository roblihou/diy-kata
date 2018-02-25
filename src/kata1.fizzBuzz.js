const fizzBuzz = (number) => {
    let str = '';
    if(number % 3 === 0){
        str += 'Fizz';
    }
    if(number % 5 === 0){
        str += 'Buzz';
    }
    if(str === ''){
        str += number;
    }
    return str;
}

export default fizzBuzz
