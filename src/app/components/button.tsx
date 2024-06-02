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
        buttonDisabled ? "bg-primary-300" : "bg-primary-500",
        "text-base text-center text-base-color px-7 py-3 rounded-lg"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
