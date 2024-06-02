"use client";

import { Bento } from "./components/bento";
import { Settings } from "./components/settings";
import { Toast } from "./components/toast";

// TODO: full line [0, 0] not handled

export default function Home() {
  return (
    <div className="mt-20">
      <Toast />

      <div className="mt-20">
        <Settings />
      </div>

      <div className="mt-12 p-8 border border-base-content-300 rounded-lg shadow-xl">
        <Bento />
      </div>
    </div>
  );
}
