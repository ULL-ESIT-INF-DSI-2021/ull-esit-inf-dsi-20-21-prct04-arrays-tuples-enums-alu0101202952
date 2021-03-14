import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/index';


var array1: number[] = [1, 0, 1, 2, 0, 1, 3];
describe('moveZeros()', () => {
  it('moveZeros(array1) move zeros to the right', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.equal([1, 1, 2, 1, 3, 0, 0]);
  });
});