import { SetColumnsNumber, SetRowsNumber } from "./setSize";
import {
  isCellOneSelectedAndNotCellTwo,
  mergeCells,
  restoreCells,
} from "@/utils";
import {
  setBento,
  setSelectedCellOne,
  setSelectedCellTwo,
} from "../lib/store/features/bentoSettings/slice";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "./button";
import { RootState } from "../lib/store/store";

export const Settings = () => {
  const dispatch = useDispatch();

  const { bento, mergeButtonDisable, selectedCellOne, selectedCellTwo } =
    useSelector((state: RootState) => state.bentoSettings);

  const resetSelectedCells = () => {
    dispatch(setSelectedCellOne(null));
    dispatch(setSelectedCellTwo(null));
  };

  const canRestoreCells = isCellOneSelectedAndNotCellTwo(
    bento,
    selectedCellOne,
    selectedCellTwo
  );

  const handleMerge = () => {
    if (!selectedCellOne && !selectedCellTwo) {
      return;
    }

    if (canRestoreCells) {
      // @ts-expect-error selectedCellOne !== null checked in isCellOneSelectedAndNotCellTwo
      const updatedBento = restoreCells(bento, selectedCellOne);

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
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-x-10">
        <SetColumnsNumber />
        <SetRowsNumber />
      </div>

      <Button
        label={canRestoreCells ? "Restore cells" : "Merge cells"}
        buttonDisabled={mergeButtonDisable}
        onClick={handleMerge}
      />
    </div>
  );
};
