import { ThemeProvider } from "./components/theme-provider";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import CreateServicePage from "./Pages/CreateServicePage";
import PageNotFound from "./Pages/Error/PageNotFound";
import UpdatePage from "./Pages/UpdatePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<PageNotFound />} />
      <Route index element={<HomePage />} />
      <Route path="/create-service" element={<CreateServicePage />} />
      <Route path="/update/:id" element={<UpdatePage />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
