import "./App.css";
import HomePage from "./Components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/Form";
import Update from "./Components/Update.jsx";
import Delete from "./Components/Delete.jsx";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/add",
      element: <Form />,
    },
    {
      path: "/update",
      element: <Update />,
    },
    {
      path: "/delete",
      element: <Delete />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
