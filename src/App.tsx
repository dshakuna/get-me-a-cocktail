import { CocktailList } from './components/CocktailList';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import { CocktailDetail } from './components/CocktailDetail';
import PageBlog from './pages/Blog';
import BlogDetail from './pages/BlogDetail'; 
import './styles/App.scss';
import { CocktailFinderSearch } from './components/CocktailFinderSearch';
import ContactForm from './modules/contact/ContactForm';
import { BaseLayout } from './modules/layout/BaseLayout';
import { FavoritesPage } from './modules/cocktail/Favorites';

function App() {
  const router = createBrowserRouter([
    {
      element: <BaseLayout/>,
      children: [
        {
          path: "/",
          element: <CocktailList />
        },
        {
          path: "/cocktails",
          element: <CocktailList />
        },
        {
          path: "/blog",
          element: <PageBlog/>
        },
        {
          path:"/blog/:postId",
          element: <BlogDetail/>
        },
        {
          path: "/cocktails/:cocktailId",
          element: <CocktailDetail/>
        },
        {
          path: "/cocktails/search",
          element: <CocktailFinderSearch/>
        },
        {
          path:"/contact",
          element: <ContactForm/>
        },
        {
          path:"/favorites",
          element: <FavoritesPage/>
        },
      ]
    },
    
  ]);

  return <RouterProvider router={router} />
}

export default App;

