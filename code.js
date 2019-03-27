// Ne supprimez pas ces lignes
// Chargement de l'input de test
let input;
function initInput(valeur) {
  input = valeur;
}

// Ne supprimez pas ces lignes
// Support de LocalPrint et LocalPrintArray utilisées dans les
// réponses des exercices de la saison 11
function LocalPrint(chaine) {
  console.error(chaine);
}
function LocalPrintArray(chaine) {
  console.error(chaine);
}

function findLetter(data,last_index){
  let letter = data[0][last_index];
  let max = null;
  let words_to_substring = [];
  for(let i in data){
    let substring = words_substring[i];
    let result = substring.indexOf(letter);
    if(result == -1)
      return -1;
    else {
      words_to_substring.push({index:i,substring:result + 1});
      if(max == null || result > max)
        max = result;
    }
  }
  for(let task of words_to_substring)
    words_substring[task.index] = words_substring[task.index].substring(task.substring);
  return max;
}


function findBest(data){
  last_index = 0;
  final_word = "";
  words_substring = JSON.parse(JSON.stringify(data));
  while(last_index != 10)
  {
    let result = findLetter(data,last_index);

    if(result != -1){
      final_word += data[0][last_index];
      last_index++;
    }
    else
      last_index++;
      if(last_index > 10){
        return final_word;
      }
  }
  return final_word;
}

// -- Développez votre code dans la fonction ContestResponse ci-après
function ContestResponse() {
  let result = "";
  let nb_words = +input[0];
  console.error("nb_words",nb_words)

  // example Data to test
  input.shift();
  let count = 0;
  let best_word = "";
  counter = input.length;
  while(count != counter){
    result = findBest(input);
    if(best_word.length < result.length){
      best_word = result;
    }
    to_push = input[0];
    input.push(to_push);
    input.shift();
    count++;
  }
  if(best_word == null || best_word.length == 0)
    console.log("KO");
  else
    console.log(best_word);

}
// -- Fin de votre code

// Ne supprimez pas ces lignes
exports.ContestResponse = ContestResponse;
exports.initInput = initInput;
