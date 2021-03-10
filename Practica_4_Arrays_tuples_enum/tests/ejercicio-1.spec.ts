import 'mocha';
import {expect} from 'chai';
import {decodeResistor} from '../src/ejercicio-1';

describe('decodificar sentencias', () => {
  it('decodeResistor(marrón, verde) returns value 15', () => {
    expect(decodeResistor("marrón","verde")).to.be.equal(15);
  });
});