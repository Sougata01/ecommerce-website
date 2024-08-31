import CartContextProvider from "./components/store/CartContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import StorePage from "./pages/Store";
import AboutPage from "./pages/About";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/store', element: <StorePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/contact-us', element: <ContactUs /> },
    ]
  }
])

function App() {

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App;
