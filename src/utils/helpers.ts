import { Bento, CellCoordinates } from "./interface/bento";
import { cloneDeep, isNil } from "lodash";

export const RestoreCells = (
  bento: Bento,
  selectedCellOne: CellCoordinates
): Bento => {
  const [columnWidth, rowWidth] =
    bento[selectedCellOne.rowIndex][selectedCellOne.columnIndex];

  const updatedBento = cloneDeep(bento);

  for (
    let row = selectedCellOne.rowIndex;
    row < selectedCellOne.rowIndex + rowWidth;
    row++
  ) {
    for (
      let column = selectedCellOne.columnIndex;
      column < selectedCellOne.columnIndex + columnWidth;
      column++
    ) {
      updatedBento[row][column] = [1, 1];
    }
  }

  return updatedBento;
};

export const mergeCells = (
  bento: Bento,
  selectedCellOne: CellCoordinates,
  selectedCellTwo: CellCoordinates
): Bento => {
  const cellToUpdate: CellCoordinates = {
    rowIndex: Math.min(selectedCellOne?.rowIndex, selectedCellTwo?.rowIndex),
    columnIndex: Math.min(
      selectedCellOne?.columnIndex,
      selectedCellTwo?.columnIndex
    ),
  };
  const cellToHide: CellCoordinates = {
    rowIndex: Math.max(selectedCellOne?.rowIndex, selectedCellTwo?.rowIndex),
    columnIndex: Math.max(
      selectedCellOne?.columnIndex,
      selectedCellTwo?.columnIndex
    ),
  };

  const updatedBento = cloneDeep(bento);

  const updatedLength = Math.max(
    cellToHide.columnIndex - cellToUpdate.columnIndex + 1,
    1
  );
  const updatedWidth = Math.max(
    cellToHide.rowIndex - cellToUpdate.rowIndex + 1,
    1
  );

  for (let row = cellToUpdate.rowIndex; row <= cellToHide.rowIndex; row++) {
    for (
      let column = cellToUpdate.columnIndex;
      column <= cellToHide.columnIndex;
      column++
    ) {
      updatedBento[row][column] = [0, 0];
    }
  }
  updatedBento[cellToUpdate.rowIndex][cellToUpdate.columnIndex] = [
    updatedLength,
    updatedWidth,
  ];

  return updatedBento;
};

export const isCellOneSelectedAndNotCellTwo = (
  bento: Bento,
  selectedCellOne: CellCoordinates | null,
  selectedCellTwo: CellCoordinates | null
): boolean => {
  return (
    !isNil(selectedCellOne) &&
    isNil(selectedCellTwo) &&
    (bento[selectedCellOne.rowIndex][selectedCellOne.columnIndex][0] !== 1 ||
      bento[selectedCellOne.rowIndex][selectedCellOne.columnIndex][1] !== 1)
  );
};

export const isCellCurrentCell = (
  cell: CellCoordinates | null,
  rowIndex: number,
  columnIndex: number
): boolean => {
  return (
    cell !== null &&
    cell.columnIndex === columnIndex &&
    cell.rowIndex === rowIndex
  );
};

export const canDeleteLastColumn = (bento: Bento): boolean => {
  for (let row of bento) {
    const lastRowCell = row.at(-1);

    if (isNil(lastRowCell) || (lastRowCell[0] === 0 && lastRowCell[1] === 0)) {
      return false;
    }
  }

  return true;
};

export const canDeleteLastRow = (bento: Bento): boolean => {
  const lastRow = bento.at(-1);

  if (isNil(lastRow)) {
    return false;
  }

  for (let lastRowCell of lastRow) {
    if (lastRowCell[0] === 0 && lastRowCell[1] === 0) {
      return false;
    }
  }

  return true;
};
