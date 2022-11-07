import Home from "../../components/Pages/Home/Home";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    }
]);

export default router;