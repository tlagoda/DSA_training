const generateArray = (length: number, max: number) => {
  const result: number[] = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * max) + 1);
  }
  return result;
};

export { generateArray };
