import CocktailNavbar from './components/HeaderNavbar'; 
import { CocktailList } from './components/CocktailList';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { CocktailDetail } from './components/CocktailDetail';
import PageBlog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; 
import './styles/App.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CocktailNavbar />
    },
    {
      path: "/cocktails",
      element: <CocktailList />
    },
    {
      path: "/blog",
      element: < PageBlog/>
    },
    {
      path:"/blog/:postId",
      element: <BlogDetail/>
    },
    {
      path: "/cocktails/:cocktailId",
      element: <CocktailDetail/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;

