import { ColourPicker } from "./settings/ColourPicker";
import { SizeSelector } from "./settings/SizeSelector";
import { TextInput } from "./settings/TextInput";
import { UppercaseSelector } from "./settings/UppercaseSelector";

export const Settings = () => {
  return (
    <div className="overflow-auto h-screen bg-blue-50 text-blue-950 rounded-3xl md:rounded-e-none">
      <div className="py-12 px-4 space-y-8">
        <div className="space-y-4">
          <TextInput title="Title" type="title" />
          <SizeSelector title="font size" />
          <ColourPicker label="text colour" />
          <UppercaseSelector />
        </div>

        <div className="space-y-4">
          <TextInput title="Label" type="label" />
          <SizeSelector title="font size" />
          <ColourPicker label="text colour" />
          <UppercaseSelector />
        </div>

        <div>
          <p className="text-xl font-medium leading-none tracking-tight">
            Cell
          </p>
          <div className="mt-4 space-y-4">
            <ColourPicker label="background" />
            <SizeSelector title="radius" />
            <ColourPicker label="radius colour" />
            <SizeSelector title="shadow" />
            <SizeSelector title="border" />
          </div>
        </div>
      </div>
    </div>
  );
};
