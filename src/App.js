

import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import GenPass from './pages/GenPass';






function App() {
  


  const router = createBrowserRouter([
       
        {
          path: "/",
          element: <><Home/></>
        },
        {
          path: "/Generate/Password",
          element:<><GenPass/></>
        }


  ])


  
  
  return (
    <>
    
    <RouterProvider router={router} />
      

    
     

    </>
    

  );
}

export default App;
