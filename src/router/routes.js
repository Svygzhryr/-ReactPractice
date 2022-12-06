import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', Element: About},
    {path: '/posts', Element: Posts},
    {path: '/posts/:id', Element: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', Element: Login},
]