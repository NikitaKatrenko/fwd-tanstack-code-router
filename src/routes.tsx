import { createRootRoute, createRoute } from '@tanstack/react-router';
import {Root} from "./components/Root";
import {FirstPage} from "./pages/FirstPage";
import {SecondPage} from "./pages/SecondPage";

//define rootRoure with root component previously created
const rootRoute = createRootRoute({
    component: Root,
});

//define indexRoute with index component previously created
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: FirstPage,
});

//define firstPage with FirstPage component previously created
const firstPage = createRoute({
    //call getParentRoute to get the parent route
    getParentRoute: () => rootRoute,
    path: '/second',
    component: SecondPage,
});

//add children to rootRoute
export const routeTree = rootRoute.addChildren([indexRoute, firstPage]);