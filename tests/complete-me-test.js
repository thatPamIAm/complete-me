import { expect } from 'chai';
import CompleteMe from '../scripts/complete-me'
const text = "/usr/share/dict/words"

describe('CompleteMe', () => {
  it('should instantiate new objects', () => {
    let completion = new CompleteMe()
    expect(completion).to.be.instanceof(CompleteMe);
  });

  it('should have a method called insert that adds new words', () => {

  });
});
