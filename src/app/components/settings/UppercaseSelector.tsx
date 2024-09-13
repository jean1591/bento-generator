"use client";

import { Switch } from "@headlessui/react";
import { useState } from "react";

export const UppercaseSelector = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <p className="font-medium leading-none tracking-tight capitalize">
        Uppercase
      </p>

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-500 ease-in-out  data-[checked]:bg-green-600"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
        />
      </Switch>
    </div>
  );
};
