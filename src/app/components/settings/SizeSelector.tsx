export const SizeSelector = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium leading-none tracking-tight capitalize">
        {title}
      </p>

      <div className="flex items-center justify-end gap-x-2">
        <button className="text-sm h-8 w-8 rounded-lg uppercase border-[2px] border-blue-950">
          XS
        </button>
        <button className="text-sm h-8 w-8 rounded-lg uppercase border-[2px] border-blue-950">
          SM
        </button>
        <button className="text-sm h-8 w-8 rounded-lg uppercase border-[2px] border-blue-950">
          MD
        </button>
        <button className="text-sm h-8 w-8 rounded-lg uppercase border-[2px] border-blue-950">
          LG
        </button>
        <button className="text-sm h-8 w-8 rounded-lg uppercase border-[2px] border-blue-950">
          XL
        </button>
      </div>
    </div>
  );
};
