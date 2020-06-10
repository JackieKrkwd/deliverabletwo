const vacationType = prompt("What kind of trip would you like to go on: musical, tropical or adventurous?");

const groupSize = prompt("How many are in your group?");

let destination = '';

if ( vacationType === 'musical' ) {
    destination = 'New Orleans';
} else if ( vacationType === 'tropical' ) {
    destination = 'a Beach Vacation in Mexico';
} else if ( vacationType === 'adventurous' ) {
    destination = 'go Whitewater Rafting the Grand Canyon';
}


let travelSuggestion = '';

if ( groupSize > 0 && groupSize < 3) {
    travelSuggestion = 'First Class Flight';
} else if ( groupSize > 2 && groupSize <= 5 ) {
    travelSuggestion = 'Helecopter';
} else if ( groupSize >= 6 ) {
    travelSuggestion = 'Charter Flight';
} 

const result = 'Since you’re a group of ' + groupSize + ' going on a ' + vacationType + ' vacation, you should take a ' + travelSuggestion + ' to ' + destination + '.';

console.log(result);