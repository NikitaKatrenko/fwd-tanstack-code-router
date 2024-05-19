import {Link, Outlet} from "@tanstack/react-router";

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
            <Outlet/>
        </div>
    )
}

