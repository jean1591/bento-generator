export const ColourPicker = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium leading-none tracking-tight capitalize">
        {label}
      </p>

      <button className="bg-green-500 h-8 w-2/3 rounded-lg"></button>
    </div>
  );
};
