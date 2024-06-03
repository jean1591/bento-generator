import { ToastDetails } from "./interface/toast";

export const codeCopiedToast: ToastDetails = {
  color: "green",
  message: "Use it anywhere with TailwindCSS",
  title: "Code copied in your clipboard 📎",
};

export const cannotMergeColumnToast: ToastDetails = {
  color: "red",
  message: "Cannot delete column with merged cells",
  title: "An error occured 😱",
};

export const cannotMergeRowToast: ToastDetails = {
  color: "red",
  message: "Cannot delete row with merged cells",
  title: "An error occured 😱",
};
