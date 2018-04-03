function autocorrect(input) {
    let newResult = input;
    let temp = '';
    let correctPhrase = 'your client';

    //checking if input string is empty
    if (input.length === 0) {
        return input;
    }

    //using regex to match the exact word 
    while (newResult.search(/\byou\b/) !== -1 || newResult.search(/\byouuu\b/) !== -1 || newResult.search(/\bu\b/) !== -1) {

        if (newResult.search(/\byou\b/) !== -1) {
            temp = newResult.substring(newResult.toLowerCase().search(/\byou\b/) + 3)
            //performing autocorrect
            newResult = newResult.slice(0, newResult.toLowerCase().search(/\byou\b/)) + correctPhrase + temp;
        }

        if (newResult.search(/\byouuu\b/) !== -1) {
            temp = newResult.substring(newResult.search(/\byouuu\b/) + 3)
            //performing autocorrect
            newResult = newResult.slice(0, newResult.search(/\byouuu\b/)) + correctPhrase + temp;
        }
        
        if (newResult.search(/\bu\b/) !== -1) {
            temp = newResult.substring(newResult.search(/\bu\b/) + 3)
            //performing autocorrect
            newResult = newResult.slice(0, newResult.search(/\bu\b/)) + correctPhrase + temp;
        }

    }
    return newResult;
}

var x = "We have sent the deliverables to you."
console.log(x);
console.log(autocorrect(x));
