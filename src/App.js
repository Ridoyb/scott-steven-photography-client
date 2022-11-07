import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routers/Routes'

function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
