
import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejercicio-2';

var array1 = new Array('allow', 'lowering', 'ringmaster', 'terror');

describe('meshArray()', () => {
  it('meshArray(array1) returns value the chained word', () => {
    expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.be.equal(undefined);
  });
});
