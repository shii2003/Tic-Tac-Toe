import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"
import './index.css';
import Home from "./pages/Home";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
