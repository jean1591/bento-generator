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
        buttonDisabled ? "bg-indigo-950/30" : "bg-indigo-950/80",
        "text-base text-center text-indigo-50 px-7 py-3 rounded-lg"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
