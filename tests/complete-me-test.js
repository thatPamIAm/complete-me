import { expect } from 'chai';
import CompleteMe from '../scripts/complete-me';
let fs = require('fs');
require ('locus');

describe('CompleteMe', () => {
  it('should instantiate new objects', () => {
    let completion = new CompleteMe();

    expect(completion).to.be.instanceof(CompleteMe);
  });

  it('should have a root property', () => {
    let completion = new CompleteMe();

    expect(completion).to.have.property('root');
  });

  it('should start with zero elements', () => {
    let completion = new CompleteMe();

    expect(completion.length).to.equal(0);
  });

  it('should have a function called insert that adds new words to the tree', () => {
    let completion = new CompleteMe();
    completion.insert('pizza');

    expect(completion.root.children).to.have.property('p');
  });

  it('should add each character as a child to the previous character', () =>{
    let completion = new CompleteMe();
    completion.insert('pizza');

    expect(completion.root.children['p'].children).to.have.property('i');
    expect(completion.root.children['p'].children['i'].children).to.have.property('z');
    expect(completion.root.children['p'].children['i'].children['z'].children).to.have.property('z');
    expect(completion.root.children['p'].children['i'].children['z'].children['z'].children).to.have.property('a');
  });

  it('should change the property isComplete to true when an entire word is entered', () => {
    let completion = new CompleteMe();
    completion.insert('pizza');

    expect(completion.root.children['p'].children['i'].children['z'].children['z'].children['a'].isComplete).to.equal(true);
  });

  it('should keep track of how many words have been added to the tree', () => {
    let completion = new CompleteMe();
    completion.insert('pizza');
    completion.insert('hello');
    completion.insert('pam');

    expect(completion.length).to.equal(3);
  });

  it('should have a function called count that will tell you how many words you have', ()=> {
    let completion = new CompleteMe();
    completion.insert('pizza');
    completion.insert('hello');
    let count = completion.count();

    expect(count).to.equal(2);
  });

  it('should suggest words when given a partial string', () => {
    let completion = new CompleteMe();
    completion.insert('hell');
    completion.insert('hello');
    completion.suggest('he');

    expect(completion.suggestions).to.deep.equal(['hell', 'hello']);
  });

  it('should have a function called populate that brings in the dictionary', () => {
    let completion = new CompleteMe();
    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    completion.populate(dictionary);
    
    expect(completion.length).to.equal(235886);
  });

});
