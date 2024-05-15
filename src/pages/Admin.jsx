import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}

export default Admin;
