"use client";

import { useState } from "react";
import { CellCoordinates } from "./lib/store/features/bentoSettings/slice";
import { Bento, classNames, generateEmptyBento } from "@/utils";

export default function Home() {
  const [col, setCol] = useState<number>(3);
  const [row, setRow] = useState<number>(3);

  const [bento, setBento] = useState<Bento>(generateEmptyBento(col, row));

  const [cellOne, setCellOne] = useState<CellCoordinates | null>(null);
  const [cellTwo, setCellTwo] = useState<CellCoordinates | null>(null);

  const handleCellOnClick = (rowIndex: number, columnIndex: number) => {
    const isSelectedCellOne = isCellCurrentCell(cellOne, rowIndex, columnIndex);
    const isSelectedCellTwo = isCellCurrentCell(cellTwo, rowIndex, columnIndex);

    console.log({
      cellOne,
      cellTwo,
      isSelectedCellOne,
      isSelectedCellTwo,
      "cellOne && isSelectedCellOne": cellOne && isSelectedCellOne,
      "cellTwo && isSelectedCellTwo": cellTwo && isSelectedCellTwo,
      "(!cellOne && cellTwo) || (!cellOne && !cellTwo)":
        (!cellOne && cellTwo) || (!cellOne && !cellTwo),
      "cellOne && !cellTwo": cellOne && !cellTwo,
    });

    // Cancel selectedCellOne
    if (cellOne && isSelectedCellOne) {
      setCellOne(null);
      return;
    }

    // Cancel selectedCellTwo
    if (cellTwo && isSelectedCellTwo) {
      setCellTwo(null);
      return;
    }

    // Select selectedCellOne
    if ((!cellOne && cellTwo) || (!cellOne && !cellTwo)) {
      setCellOne({ rowIndex, columnIndex });
      return;
    }

    // Select selectedCellTwo
    if (cellOne) {
      setCellTwo({ rowIndex, columnIndex });
      return;
    }
  };

  const handleMerge = () => {
    if (!cellOne || !cellTwo) {
      return;
    }

    // Find most up left cell
    let cellToUpdate = cellOne
    let cellToCheck = cellTwo
    
    if (cellOne?.columnIndex**2 + cellOne?.rowIndex**2 > cellTwo?.columnIndex**2 + cellTwo?.rowIndex**2) {
      cellToUpdate = cellTwo
      cellToCheck = cellOne
    }

    // Check if other cell is neighbour (vertical & horizontal)
    if (cellToUpdate.rowIndex === cellToCheck.rowIndex || cellToUpdate.columnIndex === cellToCheck.columnIndex) {
      // Update up left cell col-span / row-span
      // ????? HOW TO MERGE ?????
    }

    return 
  };

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center">
        <button
          className={classNames(
            cellOne && cellTwo ? "bg-blue-800" : "bg-slate-400",
            "text-center text-slate-200 px-7 py-3 rounded-lg"
          )}
          onClick={handleMerge}
        >
          Merge
        </button>
      </div>

      <div
        className={classNames(
          col === 1 ? "grid-cols-1" : "",
          col === 2 ? "grid-cols-2" : "",
          col === 3 ? "grid-cols-3" : "",
          col === 4 ? "grid-cols-4" : "",
          col === 5 ? "grid-cols-5" : "",
          "mt-20 grid gap-5"
        )}
      >
        {bento.map((row, rowIndex) =>
          row.map((size, columnIndex) => {
            if (size[0] !== 0 && size[1] !== 0) {
              return (
                <div
                  key={[rowIndex, columnIndex].toString()}
                  className={classNames(
                    isCellCurrentCell(cellOne, rowIndex, columnIndex)
                      ? "border-red-100 bg-red-200 shadow-2xl"
                      : "border-blue-100 bg-blue-200 shadow-sm",
                    isCellCurrentCell(cellTwo, rowIndex, columnIndex)
                      ? "border-green-100 bg-green-200 shadow-2xl"
                      : "border-blue-100 bg-blue-200 shadow-sm",
                    "border h-32 transition ease-in-out duration-500 rounded-lg"
                  )}
                  onClick={() => handleCellOnClick(rowIndex, columnIndex)}
                >
                  <p className="text-center text-black">
                    {`(${columnIndex}, ${rowIndex})`}
                  </p>
                </div>
              );
            }
          })
        )}
      </div>
    </div>
  );
}

const isCellCurrentCell = (
  firstCell: CellCoordinates | null,
  rowIndex: number,
  columnIndex: number
): boolean => {
  return (
    firstCell !== null &&
    firstCell.columnIndex === columnIndex &&
    firstCell.rowIndex === rowIndex
  );
};
