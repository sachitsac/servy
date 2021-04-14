export interface AddInput {
  a: number;
  b: number;
}

export const Sum = ({ a, b }: AddInput): number => a + b;
