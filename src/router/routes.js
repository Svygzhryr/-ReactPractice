import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
    {path: '/about', Element: About},
    {path: '/posts', Element: Posts},
    {path: '/posts/:id', Element: PostIdPage},
]