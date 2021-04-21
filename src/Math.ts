export interface Input {
  a: number;
  b: number;
}

export type MathFn = ({ a, b }: Input) => number;

export interface IMath {
  sum: MathFn;
  multiply: MathFn;
}

export const Math = (): IMath => {
  return {
    sum: ({ a, b }): number => a + b,
    multiply: ({ a, b }): number => a * b,
  };
};
