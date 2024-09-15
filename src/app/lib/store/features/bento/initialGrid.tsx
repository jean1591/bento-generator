import { Grid, Size, Text } from "./slice";

const initialText: Text = {
  style: { colour: "text-blue-700", fontSize: "SM" as Size, uppercase: false },
  value: "followers",
};

export const initialGrid: Grid = [
  {
    colSpan: 2,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },

  {
    colSpan: 3,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 2,
    hidden: false,
    title: initialText,
    label: initialText,
  },

  {
    colSpan: 1,
    rowSpan: 2,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },

  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 2,
    rowSpan: 1,
    hidden: false,
    title: initialText,
    label: initialText,
  },
  {
    colSpan: 1,
    rowSpan: 1,
    hidden: true,
    title: initialText,
    label: initialText,
  },
];
