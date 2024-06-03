import { SetColumnsNumber, SetRowsNumber } from "./setSize";
import {
  isCellOneSelectedAndNotCellTwo,
  mergeCells,
  restoreCells,
} from "@/utils";
import {
  setBento,
  setDisplayToast,
  setErrorMessage,
  setSelectedCellOne,
  setSelectedCellTwo,
} from "../lib/store/features/bentoSettings/slice";
import { useDispatch, useSelector } from "react-redux";

import { Bento } from "./bento";
import { Button } from "./button";
import { RootState } from "../lib/store/store";
import { StoreProvider } from "../lib/store/storeProvider";
import { renderToStaticMarkup } from "react-dom/server";

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

  const handleOnCopy = () => {
    dispatch(setErrorMessage("Code successfully copied !"));
    dispatch(setDisplayToast(true));

    navigator.clipboard.writeText(
      renderToStaticMarkup(
        <StoreProvider>
          <Bento />
        </StoreProvider>
      )
    );

    setTimeout(() => {
      dispatch(setDisplayToast(false));
    }, 5000);
  };

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

      <div className="flex items-center justify-end gap-x-10">
        <Button
          label={canRestoreCells ? "Restore cells" : "Merge cells"}
          buttonDisabled={mergeButtonDisable}
          onClick={handleMerge}
        />

        <Button
          label={"Get the code"}
          buttonDisabled={false}
          onClick={handleOnCopy}
        />
      </div>
    </div>
  );
};
