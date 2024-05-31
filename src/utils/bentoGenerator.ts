import {
  BASE_BLOCK,
  Bento as BentoType,
  canCreateColSpan3,
  canCreateRowSpan3,
  isBlockAvailable,
  isLargerThan,
  isLastColumn,
  isLastRow,
  shouldSkipBlock,
} from ".";

const RANDOM_THRESHOLD_SPAN2 = 0.85;
const RANDOM_THRESHOLD_SPAN3 = 0.9;

export const generateEmptyBento = (length: number, height: number): BentoType => {
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

export const generateRandomBento = (
  length: number,
  height: number
): BentoType => {
  const bento = generateEmptyBento(length, height);

  for (let rowIndex = 0; rowIndex < height; rowIndex++) {
    for (let columnIndex = 0; columnIndex < length; columnIndex++) {
      if (shouldSkipBlock(bento, rowIndex, columnIndex)) {
        continue;
      }

      const row = bento[rowIndex];

      const randomNumber = Math.random();

      if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN3)) {
        // span-3
        if (canCreateColSpan3(bento, columnIndex, rowIndex)) {
          // Merge three blocks horizontaly
          bento[rowIndex][columnIndex] = [3, 1];
          bento[rowIndex][columnIndex + 1] = [0, 0];
          bento[rowIndex][columnIndex + 2] = [0, 0];
        } else if (canCreateRowSpan3(bento, columnIndex, rowIndex)) {
          // Merge three blocks verticaly
          bento[rowIndex][columnIndex] = [1, 3];
          bento[rowIndex + 1][columnIndex] = [0, 0];
          bento[rowIndex + 2][columnIndex] = [0, 0];
        }
      } else if (isLargerThan(randomNumber, RANDOM_THRESHOLD_SPAN2)) {
        // span-2
        if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(bento, columnIndex + 1, rowIndex) &&
          !isLastRow(rowIndex, bento.length)
        ) {
          // Merge two blocks horizontaly and verticaly
          bento[rowIndex][columnIndex] = [2, 2];
          bento[rowIndex][columnIndex + 1] = [0, 0];
          bento[rowIndex + 1][columnIndex] = [0, 0];
          bento[rowIndex + 1][columnIndex + 1] = [0, 0];
        } else if (
          !isLastColumn(columnIndex, row.length) &&
          isBlockAvailable(bento, columnIndex + 1, rowIndex)
        ) {
          // Merge two blocks horizontaly
          bento[rowIndex][columnIndex] = [2, 1];
          bento[rowIndex][columnIndex + 1] = [0, 0];
        } else if (!isLastRow(rowIndex, bento.length)) {
          // Merge two blocks verticaly
          bento[rowIndex][columnIndex] = [1, 2];
          bento[rowIndex + 1][columnIndex] = [0, 0];
        }
      }
    }
  }

  return bento;
};
