import { createBrowserRouter } from 'react-router'
import App from './App'
// import PostIdPage from './pages/PostIdPage'
import ErrorPage from './pages/ErrorPage'
// import HomePage from './pages/HomePage'
// import AboutPage from './pages/AboutPage'
// import ContactPage from './pages/ContactPage'
// import SignUpPage from './pages/SignUpPage'
// import LoginPage from './pages/LoginPage'
// import AccountPage from './pages/AccountPage'
// import Profile from './components/Profile'
// import BillingDetails from './components/BillingDetails'


export const router = createBrowserRouter([
    {
        path: '',
        Component: App,
        // children: [
        //     {
        //         path: '',
        //         Component: HomePage
        //     },
        //     {
        //         path: 'about',
        //         Component: AboutPage
        //     },
        //     {
        //         path: 'contact',
        //         Component: ContactPage
        //     },
        //     {
        //         path: 'signup',
        //         Component: SignUpPage
        //     },
        //     {
        //         path: 'login',
        //         Component: LoginPage
        //     },
        //     {
        //         path: 'account',
        //         Component: AccountPage
        //     },
        //     {
        //         path: 'profile',
        //         Component: Profile
        //     },
        //     {
        //         path: 'cart',
        //         Component: BillingDetails
        //     },
        //     // {
        //     //     path: 'post/:id?',
        //     //     Component: PostIdPage
        //     // }
        // ]
    },
    {
        path:'*',
        Component: ErrorPage
    }

]) 