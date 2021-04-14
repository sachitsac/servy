import { Sum } from './math';

describe('test', () => {
  test('add', () => {
    const a = 1;
    const b = 1;
    const result = 2;
    expect(Sum({ a, b })).toEqual(result);
  });
});
