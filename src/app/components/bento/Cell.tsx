import {
  Cell as CellType,
  Size,
  setSelectedCell,
} from "@/app/lib/store/features/bento/slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/app/lib/store/store";
import { classNames } from "@/utils";

const textSizeMapper = {
  [Size.XS]: "text-xs",
  [Size.SM]: "text-sm",
  [Size.MD]: "text-base",
  [Size.LG]: "text-lg",
  [Size.XL]: "text-xl",
};

export const Cell = ({
  cellDetails,
  cellIndex,
}: {
  cellDetails: CellType;
  cellIndex: number;
}) => {
  const { selectedCell } = useSelector((state: RootState) => state.bento);
  const dispatch = useDispatch();

  const { colSpan, hidden, label, rowSpan, title } = cellDetails;
  const { style: labelStyle, value: labelValue } = label;
  const { style: titleStyle, value: titleValue } = title;

  const handleCellOnClick = () => {
    console.log(`Clicked: (${cellIndex})`);
    dispatch(setSelectedCell(cellIndex));
  };

  const isSelectedCell = selectedCell === cellIndex;

  return (
    <div
      onClick={handleCellOnClick}
      className={classNames(
        isSelectedCell ? "border-red-800" : "border-blue-950",
        hidden ? "hidden" : "",
        `border-[2px] border-blue-950 rounded-lg min-h-20 min-w-40 flex items-center justify-center col-span-${colSpan} row-span-${rowSpan}`
      )}
    >
      <div className="text-center">
        <p className={classNames(textSizeMapper[titleStyle.fontSize])}>
          {titleValue}
        </p>
        <p className={classNames(textSizeMapper[labelStyle.fontSize])}>
          {labelValue}
        </p>
      </div>
    </div>
  );
};
