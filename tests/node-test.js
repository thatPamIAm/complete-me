import { expect } from 'chai';
import Node from '../scripts/node'
const text = "/usr/share/dict/words"

describe('Node', () => {
  it('should instantiate new node objects', () => {
    let node = new Node()
    expect(node).to.be.instanceof(Node);
  });
});
