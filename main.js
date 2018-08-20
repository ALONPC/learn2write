function splitString(str){
    return str.split("");
}

// function shuffleArray(array){
//     var shuffledArray = [];
//     for (var i = array.length; i > 0; i--) {
//         var k = Math.floor(Math.random() * (i+1));
//         var temp = array[i];
//         array[i] = array[k];
//         array[k] = temp;
//         shuffledArray.push(temp);
//     }
//     return shuffledArray;
// }

function generateRandomShit(){
    randomRange = Math.floor((Math.random() * 10) + 1);
    var randomShit = [];
    for (var i = 0; i < randomRange; i++) {
        randomString = splitString(Math.random().toString(36).substring(2));
        // randomNumber = Math.floor((Math.random() * 100) + i);
        randomShit = randomShit.concat(randomString);
    }
    return randomShit;
}

function shuffleArray(array){
    var shuffledArray = array.sort(function(a, b){ return 0.5 - Math.random() });
    shuffledArray = shuffledArray.concat(generateRandomShit());
    shuffledArray = shuffledArray.join('');
    return shuffledArray;
}