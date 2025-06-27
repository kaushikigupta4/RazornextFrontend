import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import CategoryPage from './components/CategoryPage.jsx';
import ProductDetailPage from './components/ProductDetailPage.jsx';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: 'products/category/:categoryName',
    element: <CategoryPage/>,
  },
  {
    path: '/product/:id', 
    element:<ProductDetailPage/>
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;


