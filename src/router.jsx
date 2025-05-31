import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home"
import Faq from "./pages/Faq"
import Destination from "./pages/Destination";
import BookPage from "./pages/Booking";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
    },
    {
        path:"/FaQ",
        element: <Faq/>,
    },
    {
        path:"/Destination",
        element: <Destination/>,
    },
    {
        path: "/Booking",
        element: <BookPage/>,
    }
])