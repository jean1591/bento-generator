"use client";

import {
  CellCoordinates,
  setBento,
  setSelectedCellOne,
  setSelectedCellTwo,
} from "./lib/store/features/bentoSettings/slice";
import { SetColumnsNumber, SetRowsNumber } from "./components/setSize";
import { useDispatch, useSelector } from "react-redux";

import { Bento } from "./components/bento";
import { Button } from "./components/button";
import { RootState } from "./lib/store/store";
import { cloneDeep } from "lodash";

// TODO: full line [0, 0] not handled

export default function Home() {
  const dispatch = useDispatch();
  const { bento, mergeButtonDisable, selectedCellOne, selectedCellTwo } =
    useSelector((state: RootState) => state.bentoSettings);

  const handleMerge = () => {
    if (!selectedCellOne && !selectedCellTwo) {
      return;
    }

    if (
      selectedCellOne &&
      !selectedCellTwo &&
      (bento[selectedCellOne.rowIndex][selectedCellOne.columnIndex][0] !== 1 ||
        bento[selectedCellOne.rowIndex][selectedCellOne.columnIndex][1] !== 1)
    ) {
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

      dispatch(setBento(updatedBento));

      dispatch(setSelectedCellOne(null));
      dispatch(setSelectedCellTwo(null));

      return;
    }

    if (!selectedCellOne || !selectedCellTwo) {
      return;
    }

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

    dispatch(setBento(updatedBento));

    dispatch(setSelectedCellOne(null));
    dispatch(setSelectedCellTwo(null));

    return;
  };

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-x-10">
          <SetColumnsNumber />
          <SetRowsNumber />
        </div>

        <Button
          label="Merge cells"
          buttonDisabled={mergeButtonDisable}
          onClick={handleMerge}
        />
      </div>

      <Bento />
    </div>
  );
}
