import { BASE_BLOCK, Bento as BentoType } from ".";

export const generateEmptyBento = (
  length: number,
  height: number
): BentoType => {
  const bento: BentoType = [];

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    const row: number[][] = [];

    for (let columnIndex = 0; columnIndex < length; columnIndex++) {
      row.push(BASE_BLOCK);
    }

    bento.push(row);
  }

  return bento;
};
