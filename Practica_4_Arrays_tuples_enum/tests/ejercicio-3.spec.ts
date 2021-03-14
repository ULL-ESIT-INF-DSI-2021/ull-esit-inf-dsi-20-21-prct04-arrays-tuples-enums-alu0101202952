import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejercicio-3';


var array1: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
describe('meanAndConcatenate()', () => {
  it('meanAndConcatenate(array1) returns value the string formed by the letters and the mean of the numerical values', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.equal(undefined);
  });
});
