function computerPlay() {
    //The result is a random number between 1 and 99
    //The one is added to make the result starts with 1 not zero
    let resultNum = Math.random() * 98 + 1;

    if (resultNum >= 1 && resultNum <= 33) {
        return 'Rock';
    } else if (resultNum > 33 && resultNum <= 66) {
        return 'Paper';
    } else if (resultNum > 66 && resultNum <= 99) {
        return 'Scissors';
    }
}

const result = computerPlay();
console.log(result);
alert(result);