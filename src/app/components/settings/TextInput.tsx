export const TextInput = ({ title }: { title: string }) => {
  return (
    <div className="space-y-2">
      <p className="font-medium leading-none tracking-tight">{title}</p>
      <input
        className="border-[1px] border-slate-400 w-full rounded-lg h-12 pl-2"
        type="text"
      />
    </div>
  );
};
