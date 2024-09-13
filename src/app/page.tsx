import { Grid } from "./components/Grid";
import { Settings } from "./components/Settings";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <Grid />
      </div>

      <div className="col-span-1">
        <Settings />
      </div>
    </div>
  );
}
