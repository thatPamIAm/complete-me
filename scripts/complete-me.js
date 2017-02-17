import Node from '../scripts/node';
require ('locus');

class CompleteMe{
  constructor(){
    this.root = new Node();
    this.length = 0;
    this.suggestions = [];
  }

  insert(word){
    let current = this.root;
    let splitWord = word.split('');

    splitWord.forEach((letter) => {
      if(current.children[letter]) {
        current = current.children[letter];
      } else {
        current.children[letter] = new Node(letter);
        current = current.children[letter];
      }
    });
    this.length++;
    current.isComplete = true;
  }

  suggest(word){
    let current = this.root;
    let letters = word.split('');

    for (let i = 0; i < letters.length; i++) {
      if(current.children[letters[i]]) {
        current = current.children[letters[i]];
      } else {
        return null;
      }
    }
    this.words(current, word);
  }

  words(current, string){

    if(current.isComplete) {
      this.suggestions.push(string);
    }

    let nodeKey = Object.keys(current.children);

    for(let i = 0; i < nodeKey.length; i++){
      let node = current.children[nodeKey[i]];
      this.words(node,  string + nodeKey);
    }
    return this.suggestions;
  }

  count() {
    return this.length;
  }

  populate(array){

    for(let i = 0; i < array.length; i++){
      this.insert(array[i]);
    }
  }
}



export default CompleteMe;
