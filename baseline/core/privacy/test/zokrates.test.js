/**
 * @jest-environment node
 */

import { zokratesServiceFactory } from '../src/index';
const fs = require('fs');

let zokrates;

beforeEach(async () => {
  zokrates = await zokratesServiceFactory();
  console.log(zokrates);
});

describe('when the underlying zokrates provider is unavailable', () => {
  beforeEach(() => {
    // TODO: stub zokratesServiceFactory();
  });
});

describe('when the underlying zokrates provider is available', () => {
  test('compile', async () => {
    const artifact = zokrates.compile();
    console.log(artifact);
  });
});
