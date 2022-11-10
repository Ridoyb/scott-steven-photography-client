import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routers/Routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="synthwave">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
