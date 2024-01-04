import { CocktailNavbar } from './components/CocktailNavbar'; // Importa CocktailNavbar
import { CocktailList } from './components/CocktailList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CocktailDetail } from './components/CocktailDetail';



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <span>Home page!</span>,
    },
    {
      path: "/cocktails",
      element: <CocktailList />
    },
    {
      path: "/cocktails/:cocktailId",
      element: <CocktailDetail/>
    }
  ]);

  return <RouterProvider router={router} />
}

export default App;
