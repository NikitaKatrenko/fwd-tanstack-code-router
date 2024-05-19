# React SPA with TanStack Router

This is a sample React application built with Vite and TanStack Router, a powerful routing library for React applications. The application demonstrates how to set up routing and navigate between different pages or views using the TanStack Router library.

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Router](https://tanstack.com/router/v1)

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 6 or later)

### Installing Dependencies

1. Clone the repository:

```
git clone https://github.com/your-repo/react-tanstack-router.git
```

2. Navigate to the project directory:

```
cd react-tanstack-router
```

3. Install dependencies:

```
npm install
```

### Running the Development Server

To start the development server, run the following command:

```
npm run dev
```

The application will be running at `http://localhost:5173`.

## Project Structure

- `src/main.jsx`: Entry point of the application.
- `src/routes.jsx`: Configuration for TanStack Router routes.
- `src/components/Root.jsx`: Root component that renders the navigation links and the outlet.
- `src/pages/FirstPage.jsx`: Component for the first page.
- `src/pages/SecondPage.jsx`: Component for the second page.

## Routing Setup

The `src/routes.jsx` file is responsible for configuring the routes in your application. Here's a breakdown of the code:

1. `createRootRoute` is used to define the root route with the `Root` component.
2. `createRoute` is used to define additional routes:
   - `indexRoute` for the `/` path, rendering the `FirstPage` component.
   - `firstPage` for the `/second` path, rendering the `SecondPage` component.
3. `rootRoute.addChildren` is used to add the `indexRoute` and `firstPage` routes as children of the `rootRoute`.
4. The resulting `routeTree` is exported for use in the main application.

## Navigation

The `Root` component (`src/components/Root.jsx`) renders the navigation links using the `Link` component from TanStack Router. The `Outlet` component is used to render the content of the currently active route.

```jsx
import { Link, Outlet } from "@tanstack/react-router";

export const Root = () => {
  return (
    <div className="App">
      <div className="nav-container">
        <Link to="/" className="[&.active]:font-bold">
          First
        </Link>{' '}
        <Link to="/second" className="[&.active]:font-bold">
          Second
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
```

## Main Application

The `src/main.jsx` file is the entry point of the application. It imports the `routeTree` from `src/routes.jsx`, creates a router instance using `createRouter`, and renders the `RouterProvider` component with the router prop.

```jsx
import './App.css';
import { routeTree } from "./routes";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({
  routeTree
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
