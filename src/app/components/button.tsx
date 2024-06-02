import { classNames } from "@/utils";

export const Button = ({
  label,
  buttonDisabled,
  onClick,
}: {
  label: string;
  buttonDisabled: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      disabled={buttonDisabled}
      className={classNames(
        buttonDisabled ? "bg-slate-400" : "bg-blue-800",
        "text-center text-slate-200 px-7 py-3 rounded-lg"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
