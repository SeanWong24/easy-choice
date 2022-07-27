export function generateRandomNaturalNumber(max: number) {
  return Math.floor(Math.random() * max);
}

export function pickRandomValue(values: any[]) {
  const valueCount = values?.length || 0;
  const index = generateRandomNaturalNumber(valueCount);
  return (values || [])[index];
}
