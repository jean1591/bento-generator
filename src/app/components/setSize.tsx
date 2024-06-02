import {
  setBento,
  setColumnNumber,
  setRowNumber,
} from "../lib/store/features/bentoSettings/slice";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "./button";
import { RootState } from "../lib/store/store";
import { cloneDeep } from "lodash";

// TODO: cannot delete row or column with merge cells without fucking up the bento

export const SetColumnsNumber = () => {
  const dispatch = useDispatch();
  const { bento, columnNumber } = useSelector(
    (state: RootState) => state.bentoSettings
  );

  const handleColumnChange = (direction: "-" | "+") => {
    if (direction === "-") {
      dispatch(setColumnNumber(columnNumber - 1));

      const updatedBento = cloneDeep(bento);
      for (let rowIndex = 0; rowIndex < updatedBento.length; rowIndex++) {
        updatedBento[rowIndex].pop();
      }

      dispatch(setBento(updatedBento));
    }

    if (direction === "+") {
      dispatch(setColumnNumber(columnNumber + 1));

      const updatedBento = cloneDeep(bento);
      for (let rowIndex = 0; rowIndex < updatedBento.length; rowIndex++) {
        updatedBento[rowIndex].push([1, 1]);
      }

      dispatch(setBento(updatedBento));
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-5">
      <Button
        label="-"
        buttonDisabled={columnNumber === 3}
        onClick={() => handleColumnChange("-")}
      />
      <p>{`${columnNumber} columns`}</p>
      <Button
        label="+"
        buttonDisabled={columnNumber === 8}
        onClick={() => handleColumnChange("+")}
      />
    </div>
  );
};

export const SetRowsNumber = () => {
  const dispatch = useDispatch();
  const { bento, columnNumber, rowNumber } = useSelector(
    (state: RootState) => state.bentoSettings
  );

  const handleRowChange = (direction: "-" | "+") => {
    if (direction === "-") {
      dispatch(setRowNumber(rowNumber - 1));

      const updatedBento = cloneDeep(bento);
      updatedBento.pop();

      dispatch(setBento(updatedBento));
    }

    if (direction === "+") {
      dispatch(setRowNumber(rowNumber + 1));

      const updatedBento = cloneDeep(bento);
      const newRow: number[][] = [];
      for (let columnIndex = 0; columnIndex < columnNumber; columnIndex++) {
        newRow.push([1, 1]);
      }
      updatedBento.push(newRow);

      dispatch(setBento(updatedBento));
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-5">
      <Button
        label="-"
        buttonDisabled={rowNumber === 3}
        onClick={() => handleRowChange("-")}
      />
      <p>{`${rowNumber} rows`}</p>
      <Button
        label="+"
        buttonDisabled={rowNumber === 8}
        onClick={() => handleRowChange("+")}
      />
    </div>
  );
};
