import { expect } from 'chai';
import Node from '../scripts/node';
// const text = '/usr/share/dict/words';
require ('locus');

describe('Node', () => {
  it('should instantiate new node objects', () => {
    let node = new Node();
    expect(node).to.be.instanceof(Node);
  });

  it('should have a data property', () => {
    let node = new Node();

    expect(node).to.have.property('data');
  });

  it('should hold data', () => {
    let node = new Node('element');

    expect(node.data).to.equal('element');
  });

  it('should have a default empty children', () => {
    let node = new Node('element');

    expect(node.children).to.deep.equal({});
  });

  it('should allow you to set a children', () => {
    let node = new Node('element');
    let node2 = new Node('burrito');
    node.children = node2;

    expect(node.children.data).to.deep.equal('burrito');
  });

  it('should have an isComplete property', () => {
    let node = new Node('element', new Node('dogs'));

    expect(node).to.have.property('isComplete');
  });

  it('should have isComplete set to false by default', () => {
    let node = new Node('element', new Node('dogs'));

    expect(node.isComplete).to.equal(false);
  });

});
