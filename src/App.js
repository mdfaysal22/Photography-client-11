import { RouterProvider } from "react-router-dom";
import useTitle from "./Hooks/useTitle";
import { router } from "./Routers/Router";



function App() {
  useTitle("Home")
  return (
    <div className="max-w-screen-lg	mx-auto">
      <RouterProvider router={router}>
      
      </RouterProvider>
    </div>
  );
}

export default App;
