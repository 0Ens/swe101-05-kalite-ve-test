export function add(input: string): number {
  if (input === "") {
    return 0;
  }
  const parts = input.split(",");
  return parts.reduce((sum, part) => {
    const num = Number(part);
    if (Number.isNaN(num)) {
      throw new Error(`Geçersiz sayı: "${part}"`);
    }
    return sum + num;
  }, 0);
}