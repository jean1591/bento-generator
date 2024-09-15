"use client";

import { Cell } from "./bento/Cell";
import { RootState } from "../lib/store/store";
import { useSelector } from "react-redux";

export const Grid = () => {
  const { grid } = useSelector((state: RootState) => state.bento);

  return (
    <div className="grid grid-cols-4 gap-4 p-8 bg-slate-50 rounded-xl text-blue-950">
      {grid.map((cell, index) => (
        <Cell key={index} cellDetails={cell} cellIndex={index} />
      ))}
    </div>
  );
};
