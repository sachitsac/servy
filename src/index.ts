type F = (name: string) => string;
type T = () => F;
export const hello: T = (): F => (name: string): string => `Hello ${name}`;
