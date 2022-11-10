import AddService from "../../components/AddService/AddService";
import Blog from "../../components/Blog/Blog";
import EditReview from "../../components/EditReview/EditReview";
import Error from "../../components/Error/Error";
import Login from "../../components/Login/Login";
import MyReviews from "../../components/MyReviews/MyReviews";
import Home from "../../components/Pages/Home/Home";
import Services from "../../components/Pages/Services/Services";
import PrivateRoute from "../../components/PrivateRoutes/PrivateRoute";
import Profile from "../../components/Profile/Profile";
import Register from "../../components/Register/Register";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'add-service',
                element: <AddService></AddService>
            },
            {
                path: 'my-reviews',
                element: <MyReviews></MyReviews>,
                loader: () => fetch('https://scott-steve-photography-server.vercel.app/reviews')
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://scott-steve-photography-server.vercel.app/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>,

            },
            {
                path: '/reviews/:id',
                loader: ({ params }) => fetch(`https://scott-steve-photography-server.vercel.app/reviews/${params.id}`),
                element: <EditReview></EditReview>,

            },
            { path: '*', element: <Error></Error> }

        ]

    }
]);

export default router;