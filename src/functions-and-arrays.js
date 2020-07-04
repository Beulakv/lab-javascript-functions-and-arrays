// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  
  if(num1>num2){
    return num1;
  } else if (num2>num1) {
    return num2;
  } else {
    return num1;
  }
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  var MaxWord = '';

  if (words.length > 0) {
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > MaxWord.length){
        MaxWord = word;
      }
    }
    return MaxWord;
  }
  return null;
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var sum = 0;

  for (var i = 0; i < numbers.length; i++){
    var num = numbers[i];
    sum += num;
  }
  return sum;
}

// function add(arrayOfNumbers){

//     arrayOfNumbers.forEach(function(oneParticularNumber){
//       sum += oneParticularNumber;
//     })
//     return sum;
//   }

//   console.log(add(numbers));
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  if (numbersAvg.length > 0) {
    return netPrice(numbersAvg) / numbersAvg.length;
  }
  else
  return null;
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  var newArr = [];

  for (var i = 0; i < wordsArr.length; i++){
    var word = wordsArr[i];
    newArr.push(word.length);
  }
  return midPointOfLevels(newArr);
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniquifyArray(wordsUnique){
  var unique = [];
  if (wordsUnique.length > 0){
    for (var i = 0; i < wordsUnique.length; i++){
        var word = wordsUnique[i];
        if (unique.indexOf(word) === -1){
          unique.push(word);
        }
      }
      return unique; 
    }
  }
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function searchElement(arr, search){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === search){
      return true;
    }
  }
  return null;
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(words, word) {
  var count = 0;
  if (words.length < 1){
    return false;
  }
  
  for (var i = 0; i < words.length; i++){
    if (words[i] === word){
      count += 1;
    }
  }
  return count;
}


// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
