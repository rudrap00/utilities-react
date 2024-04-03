import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import CurrencyConverter from "./pages/CurrencyConverter/CurrencyConverter";
import ListTasks from "./pages/ListTasks/ListTasks";
import PasswordGenerator from "./pages/PasswordGenerator/PasswordGenerator";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { index: true, element: <ListTasks /> },
        { path: "currencyConverter", element: <CurrencyConverter /> },
        { path: "passwordGenerator", element: <PasswordGenerator /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
