import "./App.css";
import HomePage from "./Components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/Form";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <HomePage />
          <Form />
        </div>
      ),
    },
    {
      path: "/add",
      element: "user add page",
    },
    {
      path: "/update",
      element: "user update page",
    },
    {
      path: "/delete",
      element: "delete user page",
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
