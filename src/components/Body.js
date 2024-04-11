import Browse from "./Browse";
import GptSearch from "./GptSearch";
import Login from "./Login";

import { createBrowserRouter, RouterProvider} from "react-router-dom";



const Body=()=>{

    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login/>,
        },
        {
          path: "/browse",
          element: <Browse/>,
        },
        {
          path: "/search",
          element: <GptSearch/>,
        },
    ]);

      

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};

export default Body;