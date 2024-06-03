"use client";

import { Bento } from "./components/bento";
import { Hero } from "./components/hero";
import { Settings } from "./components/settings";
import { Toast } from "./components/toast";

// TODO: full line [0, 0] not handled

export default function Home() {
  return (
    <div>
      <Toast />

      <Hero />

      <div className="mt-20">
        <Settings />
      </div>

      <div className="mt-12 p-8 border border-indigo-950/50 rounded-lg shadow-xl">
        <Bento />
      </div>
    </div>
  );
}
