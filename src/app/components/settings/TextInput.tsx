"use client";

import { useDispatch, useSelector } from "react-redux";

import { ChangeEvent } from "react";
import { RootState } from "@/app/lib/store/store";
import { isNil } from "lodash";
import { updateCell } from "@/app/lib/store/features/bento/slice";

export const TextInput = ({
  title,
  type,
}: {
  title: string;
  type: "title" | "label";
}) => {
  const dispatch = useDispatch();
  const { grid, selectedCell } = useSelector((state: RootState) => state.bento);

  if (isNil(selectedCell)) {
    return <></>;
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === "title") {
      dispatch(
        updateCell({
          index: selectedCell,
          partialCell: {
            title: { ...grid[selectedCell].title, value: e.target.value },
          },
        })
      );
    }

    if (type === "label") {
      dispatch(
        updateCell({
          index: selectedCell,
          partialCell: {
            label: { ...grid[selectedCell].label, value: e.target.value },
          },
        })
      );
    }
  };

  return (
    <div className="space-y-2">
      <p className="font-medium leading-none tracking-tight">{title}</p>
      <input
        onChange={(e) => handleOnChange(e)}
        value={grid[selectedCell][type === "title" ? "title" : "label"].value}
        className="border-[1px] border-slate-400 w-full rounded-lg h-12 pl-2"
        type="text"
      />
    </div>
  );
};
