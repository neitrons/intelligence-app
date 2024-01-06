export function composeRandomNumbers(to: number, amount: number): number[] {
  const randomNumbers: Set<number> = new Set();

  while (randomNumbers.size !== amount) {
    const randomNumber = Math.floor(Math.random() * to);
    randomNumbers.add(randomNumber);
  }

  return Array.from(randomNumbers);
}
