import './App.css'
import {routeTree} from "./routes";
import {RouterProvider, createRouter} from "@tanstack/react-router";

//create router
const router = createRouter({
    routeTree
})

// create module for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

// Return the RouterProvider component with the router prop

// function App() {
//     return (
//         <>
//             {/*<p>Hello!</p>*/}
//             <RouterProvider router={router} />
//         </>
//     )
// }
function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
