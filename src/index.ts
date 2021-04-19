import { Math } from './Math';

type F = (name: string) => string;
type T = () => F;
export const hello: T = (): F => (name: string): string => `Hello ${name}`;

Math().sum({ a: 2, b: 3 });
