"use client";

import { SetColumnsNumber, SetRowsNumber } from "./components/setSize";
import {
  isCellOneSelectedAndNotCellTwo,
  mergeCells,
  unMergeCells,
} from "@/utils";
import {
  setBento,
  setSelectedCellOne,
  setSelectedCellTwo,
} from "./lib/store/features/bentoSettings/slice";
import { useDispatch, useSelector } from "react-redux";

import { Bento } from "./components/bento";
import { Button } from "./components/button";
import { RootState } from "./lib/store/store";

// TODO: full line [0, 0] not handled

export default function Home() {
  const dispatch = useDispatch();
  const { bento, mergeButtonDisable, selectedCellOne, selectedCellTwo } =
    useSelector((state: RootState) => state.bentoSettings);

  const resetSelectedCells = () => {
    dispatch(setSelectedCellOne(null));
    dispatch(setSelectedCellTwo(null));
  };

  const handleMerge = () => {
    if (!selectedCellOne && !selectedCellTwo) {
      return;
    }

    if (
      isCellOneSelectedAndNotCellTwo(bento, selectedCellOne, selectedCellTwo)
    ) {
      // @ts-expect-error selectedCellOne !== null checked in isCellOneSelectedAndNotCellTwo
      const updatedBento = unMergeCells(bento, selectedCellOne);

      dispatch(setBento(updatedBento));
      resetSelectedCells();

      return;
    }

    if (selectedCellOne && selectedCellTwo) {
      const updatedBento = mergeCells(bento, selectedCellOne, selectedCellTwo);

      dispatch(setBento(updatedBento));
      resetSelectedCells();
    }

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
