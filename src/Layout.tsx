import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrong from "./Pages/Error/SomethingWentWrong";

function Layout() {
  return (
    <ErrorBoundary fallback={<SomethingWentWrong />}>
      <>
        <Header />
        <main className="my-10">
          <Outlet />
        </main>
      </>
    </ErrorBoundary>
  );
}

export default Layout;
