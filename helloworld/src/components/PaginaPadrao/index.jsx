import { Banner } from "components/Banner";
import { Outlet } from "react-router-dom";

export function PaginaPadrao() {
  return (
    <div>
      <main>
        <Banner />

        <Outlet />
      </main>
    </div>
  );
}
