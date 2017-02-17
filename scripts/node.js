require ('locus');

class Node {
  constructor(data){
    this.data = data;
    this.isComplete = false;
    this.children = {};
    // this.value = '';
  }
}

export default Node;
